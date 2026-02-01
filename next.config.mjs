/** @type {import('next').NextConfig} */
const nextConfig = {
  // This allows Next.js to work with your existing 'src' directory structure
  reactStrictMode: true,
  // If you have any issues with CSS or images, this helps handle them
  images: {
    unoptimized: true,
  },
};

export default nextConfig;