import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    //reactCompiler: true,
    turbopackClientSideNestedAsyncChunking: true,
    turbopackFileSystemCacheForDev: false,
  },
  /* config options here */
};

export default nextConfig;
