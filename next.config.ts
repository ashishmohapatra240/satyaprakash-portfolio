import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/satyaprakash-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
