// app/blog/BlogPagination.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { allPosts, POSTS_PER_PAGE } from "@/content/posts/index";

export default function BlogPagination() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategories = searchParams.getAll("category");
  const currentPage = Number(searchParams.get("page") ?? "1");

  const filtered =
    selectedCategories.length > 0
      ? allPosts.filter((post) => selectedCategories.includes(post.category))
      : allPosts;

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);

  // Don't render pagination if only one page
  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ""}`, {
      scroll: false,
    });
    // Scroll to top of grid smoothly
    document
      .getElementById("blog-grid-anchor")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="blog-pagination" style={{ marginTop: "3rem" }}>
      {/* Prev */}
      {currentPage > 1 && (
        <button
          className="blog-page-btn"
          onClick={() => goToPage(currentPage - 1)}
        >
          ← Prev
        </button>
      )}

      {/* Page numbers — show max 5 around current page */}
      {pages.map((page) => {
        const isNearCurrent =
          page === 1 ||
          page === totalPages ||
          Math.abs(page - currentPage) <= 1;

        const isEllipsis =
          (page === 2 && currentPage > 4) ||
          (page === totalPages - 1 && currentPage < totalPages - 3);

        if (!isNearCurrent && !isEllipsis) return null;

        if (isEllipsis) {
          return (
            <span
              key={`ellipsis-${page}`}
              style={{
                padding: "0 4px",
                color: "#888",
                fontFamily: "var(--body-font)",
                fontSize: "0.78rem",
              }}
            >
              …
            </span>
          );
        }

        return (
          <button
            key={page}
            className={`blog-page-btn${currentPage === page ? " active" : ""}`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      {currentPage < totalPages && (
        <button
          className="blog-page-btn"
          onClick={() => goToPage(currentPage + 1)}
        >
          Next →
        </button>
      )}
    </div>
  );
}
