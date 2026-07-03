import Link from "next/link";
import Image from "next/image";
import { allPosts } from "@/content/posts/index";

export default function BlogFeatured() {
  // First 3 posts as featured
  const featuredPosts = allPosts.slice(0, 3);

  return (
    <section className="blog-featured">
      <div className="blog-featured-inner">
        <div className="blog-section-label">Featured Articles</div>
        <div className="blog-featured-grid">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-featured-card">
              <div style={{ position: "absolute", inset: 0, background: post.coverFallback }} />
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="blog-featured-content">
                <h3>{post.title}</h3>
                <span className="blog-read-link">Read Blog</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
