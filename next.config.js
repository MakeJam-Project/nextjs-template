/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['page.tsx', 'api.ts'],
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
