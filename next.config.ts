import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'admin.hyperce.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
