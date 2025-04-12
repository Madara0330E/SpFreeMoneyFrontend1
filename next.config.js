/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.jsdelivr.net"],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors https://spworlds.ru;",
          },
        ],
      },
    ];
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
