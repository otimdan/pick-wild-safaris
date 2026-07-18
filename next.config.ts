import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "goodearthtours.com",
        pathname: "/**",
      },
    ],
  },

  // Legacy PHP-site URLs still indexed by Google (Search Console reports
  // them as 404s) — send any lingering traffic/crawlers to the current
  // Next.js equivalent instead of a dead page.
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.php",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
