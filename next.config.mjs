/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_WP_GRAPHQL_URL: 'https://sienna-raccoon-358091.hostingersite.com/graphql',
  },
  experimental: {
    optimizeCss: false,
    optimizeFonts: false,
    optimizePackageImports: false,
   },
};

export default nextConfig;
