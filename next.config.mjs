/** @type {import('next').NextConfig} */
const nextConfig = {
  // This allows Next.js to work with your existing 'src' directory structure
  reactStrictMode: true,
  // If you have any issues with CSS or images, this helps handle them
  images: {
    unoptimized: true,
  },
  env: {
    SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    SHOPIFY_API_SECRET: process.env.SHOPIFY_API_SECRET,
    SHOPIFY_STORE_URL: process.env.SHOPIFY_STORE_URL,
  },
};

export default nextConfig;