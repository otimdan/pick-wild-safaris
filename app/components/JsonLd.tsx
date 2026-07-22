// Shared JSON-LD renderer.
//
// Per the Next 16 guide (node_modules/next/dist/docs/01-app/02-guides/json-ld.md),
// `JSON.stringify` does NOT sanitise strings for XSS — a "</script>" inside any
// schema value would break out of the tag. Escaping "<" as its unicode form is
// the recommended fix, and it stays valid JSON.
//
// Always render structured data through this component rather than a bare
// <script> tag, so the escaping can never be forgotten at a call site.

export default function JsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
