/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        '@opentelemetry/instrumentation': 'commonjs @opentelemetry/instrumentation',
      });
    }
    return config;
  },
};

const withNextIntl = require('next-intl/plugin')('./src/i18n/request.ts');
module.exports = withNextIntl(nextConfig);
