import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Adjust based on your image sources
      },
    ],
  },
  // Enable React Compiler if you chose "Yes" during setup
  // experimental: {
  //   reactCompiler: process.env.NEXT_PUBLIC_REACT_COMPILER === 'true',
  // },
  /* config options here */
};

export default nextConfig;
