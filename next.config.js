/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// next.config.js
module.exports = {
  images: {
    domains: ['example.com'], // Add domains for external images
    deviceSizes: [320, 640, 768, 1024, 1280, 1536, 1920], // Default device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Default image sizes
    path: '/_next/image', // Path to the Image Component
    loader: 'default', // Default loader
  },
};

