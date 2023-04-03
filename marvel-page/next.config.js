/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/comic",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.marvel.com",
        port: "",
        pathname: "/u/prod/marvel/images/mu/web/2021/**",
      },
      {
        protocol: "https",
        hostname: "cdn.marvel.com",
        port: "",
        pathname: "/u/prod/marvel/i/mg/1/50/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
