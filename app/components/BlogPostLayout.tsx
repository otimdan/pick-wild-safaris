import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { PostMeta } from "@/content/types";
import { allPosts } from "@/content/posts/index";

type Props = {
  meta: PostMeta;
  children: React.ReactNode;
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostLayout({ meta, children }: Props) {
  // Up to 3 related posts in the same category, excluding this one
  const related = allPosts
    .filter((p) => p.slug !== meta.slug && p.category === meta.category)
    .slice(0, 3);

  // Fallback: fill with other posts if not enough in same category
  const fillerPosts = allPosts.filter(
    (p) => p.slug !== meta.slug && p.category !== meta.category,
  );
  const relatedPosts = [...related, ...fillerPosts].slice(0, 3);

  return (
    <>
      {/* Navbar sits on top of the hero */}
      <div style={{ position: "relative" }}>
        <Navbar />
      </div>

      {/* Hero */}
      <div className="post-hero">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: meta.coverFallback,
          }}
        />
        <Image
          src={meta.coverImage}
          alt={meta.title}
          fill
          className="post-hero-img"
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        <div className="post-hero-overlay" />
        <div className="post-hero-content">
          <span className="post-hero-category">{meta.category}</span>
          <h1 className="post-hero-title">{meta.title}</h1>
          <div className="post-hero-meta">
            <span>{formatDate(meta.date)}</span>
            <span>·</span>
            <span>{meta.readTime}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="post-body-wrap">
        <div className="post-body-inner">
          {/* Article */}
          <article>
            <Link href="/blog" className="post-back-link">
              ← Back to Blog
            </Link>
            <div className="post-content">{children}</div>
          </article>

          {/* Sidebar */}
          <aside className="post-sidebar">
            {/* CTA card */}
            <div className="post-cta-card">
              <h4>Ready to See It for Yourself?</h4>
              <p>
                Our planners design private safaris around you — your pace, your
                interests, your budget.
              </p>
              <Link href="/contact" className="post-cta-btn">
                Speak With a Planner
              </Link>
            </div>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="post-sidebar-card">
                <h4>More Articles</h4>
                <div className="post-related-list">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="post-related-item"
                    >
                      <div className="post-related-thumb">
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: post.coverFallback,
                          }}
                        />
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="64px"
                        />
                      </div>
                      <div className="post-related-meta">
                        <span className="post-related-cat">
                          {post.category}
                        </span>
                        <span className="post-related-title">{post.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
}
