import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Properti yang benar untuk TypeScript adalah ignoreBuildErrors
    ignoreBuildErrors: true, 
  },
  staticPageGenerationTimeout: 1000,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;