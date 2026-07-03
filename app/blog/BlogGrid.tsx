// app/blog/BlogGrid.tsx
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "@/content/posts/index";

export default function BlogGrid() {
  return (
    <div className="blog-posts-grid">
      {allPosts.map((post) => (
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
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              style={{ objectFit: "cover", zIndex: 1 }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
  );
}
