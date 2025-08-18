import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
    './src/templates/**/*.{ts,tsx}'
  ],
  theme: { extend: {} },
  plugins: []
};

export default config;
