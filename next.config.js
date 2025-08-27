// next.config.js
const path = require('path');
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  reactStrictMode: true,

  // Fallback alias in case the plugin doesn't wire it up automatically
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'contentlayer/generated': path.join(process.cwd(), '.contentlayer', 'generated'),
    };
    return config;
  },
});
