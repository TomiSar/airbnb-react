/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.dezeen.com",
      "shorttermrentalz.com",
      "news.airbnb.com",
      "links.papareact.com",
      "www.jsonkeeper.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
