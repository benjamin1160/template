import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  compress: true,
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
