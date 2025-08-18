<<<<<<< HEAD
﻿import type { NextConfig } from 'next';
=======
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Wire next-intl to the app router config.
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
>>>>>>> 82cda11126ec4e63f19433198ec033cacf2bc9b2

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
<<<<<<< HEAD
      config.externals.push({
        '@opentelemetry/instrumentation': 'commonjs @opentelemetry/instrumentation',
      });
    }
    return config;
  },
};

export default nextConfig;
=======
      (config.externals as any[]).push({
        "@opentelemetry/instrumentation": "commonjs @opentelemetry/instrumentation"
      });
    }
    return config;
  }
};

export default withNextIntl(nextConfig);
>>>>>>> 82cda11126ec4e63f19433198ec033cacf2bc9b2
