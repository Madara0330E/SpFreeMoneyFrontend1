/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
