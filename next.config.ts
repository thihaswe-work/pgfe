import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // next.config.js or next.config.ts
  eslint: { ignoreDuringBuilds: true },

  images: {
    domains: ["192.168.50.248", "dev-api.passiongeek.tech"], // Add the hostname of your server here
  },
};

export default nextConfig;
