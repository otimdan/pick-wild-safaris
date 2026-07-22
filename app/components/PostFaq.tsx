import type { FaqItem } from "@/content/types";

// Renders a post's FAQ section from the same array that feeds its FAQPage
// JSON-LD (see app/blog/[slug]/page.tsx). Keeping one source for both is the
// point: a hand-written FAQ section and hand-written schema drift apart, and
// schema that disagrees with the visible page is worse than no schema at all.
//
// Output deliberately matches the markup posts used before this component
// existed — <h2> heading plus <strong>-led paragraphs — so the existing
// .post-content descendant styles apply with no CSS changes.
export default function PostFaq({
  title,
  items,
}: {
  title: string;
  items: readonly FaqItem[];
}) {
  if (!items.length) return null;

  return (
    <>
      <h2>{title}</h2>
      {items.map((item) => (
        <p key={item.q}>
          <strong>{item.q}</strong> {item.a}
        </p>
      ))}
    </>
  );
}
