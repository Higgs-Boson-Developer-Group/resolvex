import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // WARNING: This will allow production builds with type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // WARNING: This will disable ESLint errors during production builds.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
``;
