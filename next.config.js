/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "-viqtory-prototype";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.viqtory.com" },
    ],
  },
};

module.exports = nextConfig;
