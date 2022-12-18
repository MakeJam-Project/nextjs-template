const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['page.tsx', 'api.ts'],
  compiler: {
    reactRemoveProperties: isProd && {
      properties: ['^data-test'],
    },
    removeConsole: isProd && {
      exclude: ['error'],
    },
    emotion: true,
  },
};

module.exports = withBundleAnalyzer(
  withPWA({
    dest: 'public',
    maximumFileSizeToCacheInBytes: 7000000,
    disable: process.env.NODE_ENV === 'development',
    buildExcludes: [/_buildManifest\.js$/],
    runtimeCaching,
  })(nextConfig),
);
