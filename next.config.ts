import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options can go here */
  eslint: {
    // This will allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;