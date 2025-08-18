import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Wire next-intl to the app router config.
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      (config.externals as any[]).push({
        "@opentelemetry/instrumentation": "commonjs @opentelemetry/instrumentation"
      });
    }
    return config;
  }
};

export default withNextIntl(nextConfig);
