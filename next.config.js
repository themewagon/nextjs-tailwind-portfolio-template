/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";


const nextConfig = {
  basePath: isProd ? "/nextjs-tailwind-portfolio-template" : "",
  assetPrefix: isProd ? "/nextjs-tailwind-portfolio-template/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;