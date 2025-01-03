import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["www.noormohammad.live", "cdn.sanity.io"],
  },
};

export default nextConfig;
