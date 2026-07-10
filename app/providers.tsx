"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Only track in production so local dev traffic stays out of the stats.
    if (process.env.NODE_ENV !== "production") return;

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    // No key configured — skip init so PostHog no-ops.
    if (!key) return;

    posthog.init(key, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      // Opt into PostHog's recommended defaults, which enable automatic
      // pageview + pageleave capture for client-side (SPA) navigations.
      defaults: "2026-06-25",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
