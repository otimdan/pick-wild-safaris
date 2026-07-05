// app/blog/BlogGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { allPosts, POSTS_PER_PAGE } from "@/content/posts/index";
export default function BlogGrid() {
  const searchParams = useSearchParams();
  const selectedCategories = searchParams.getAll("category");
  const currentPage = Number(searchParams.get("page") ?? "1");

  const filtered =
    selectedCategories.length > 0
      ? allPosts.filter((post) => selectedCategories.includes(post.category))
      : allPosts;

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const paginated = filtered.slice(start, start + POSTS_PER_PAGE);

  return (
    <div>
      {selectedCategories.length > 0 && (
        <p
          style={{
            fontFamily: "var(--body-font)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "1.5rem",
          }}
        >
          {filtered.length} post{filtered.length !== 1 ? "s" : ""} in{" "}
          {selectedCategories.join(", ")}
        </p>
      )}

      {paginated.length === 0 ? (
        <div
          style={{
            padding: "4rem 2rem",
            textAlign: "center",
            fontFamily: "var(--serif)",
            fontSize: "1.2rem",
            color: "#888",
          }}
        >
          No posts found for the selected categories.
        </div>
      ) : (
        <div className="blog-posts-grid">
          {paginated.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-post-card"
            >
              <div
                className="blog-post-img-wrap"
                style={{
                  position: "relative",
                  height: "200px",
                  overflow: "hidden",
                }}
              >
                <span className="blog-post-category">{post.category}</span>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: post.coverFallback,
                    zIndex: 0,
                  }}
                />
                {post.coverImage && (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover", zIndex: 1 }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </div>
              <div className="blog-post-body">
                <h3>{post.title}</h3>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "0.95rem",
                    color: "#666",
                    lineHeight: 1.5,
                    margin: "0.6rem 0 1rem",
                  }}
                >
                  {post.excerpt}
                </p>
                <span className="blog-read-link">Read Blog</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
