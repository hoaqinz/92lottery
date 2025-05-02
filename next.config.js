/**
 * @type {import('next').NextConfig}
 *
 * 92Lottery - Cá cược xổ số & Casino trực tuyến
 * Cấu hình Next.js
 */
const nextConfig = {
  // Cấu hình hình ảnh
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "92lottery.dev",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "92lottery.dev",
        pathname: "/**",
      },
    ],
  },

  // Bỏ qua lỗi TypeScript khi build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Bỏ qua lỗi ESLint khi build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Cấu hình tối ưu hóa
  compress: true, // Nén các file tĩnh
  poweredByHeader: false, // Tắt header X-Powered-By
  reactStrictMode: true, // Bật strict mode cho React

  // Cấu hình cho Cloudflare Pages
  images: {
    unoptimized: true, // Tắt tối ưu hóa hình ảnh để tương thích với Cloudflare
  }



  // Cấu hình đường dẫn
  trailingSlash: false,

  // Cấu hình headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
