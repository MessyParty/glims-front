/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: [
      "example.com",
      "glimsbucket.s3.ap-northeast-2.amazonaws.com",
      "www.byredo.com",
      "www.chanel.com",
      "www.aesop.com",
      "www.jomalone.co.kr",
      "cdn.shopify.com",
      "assets.hermes.com",
      "www.tamburins.com",
      "www.byredo.com",
      "i5.walmartimages.com",
      "m.media-amazon.com",
      "picsum.photos",
    ],
  },
  rewrites: async () => {
    return [
      {
        // login으로 시작하는 url을 만나면 dest로 프록싱 해주는 설정 입니다
        source: "/login/:paths*",
        destination: "https://dev.glims.store/login/:paths*",
      },
      {
        source: "/:path*",
        destination: "https://dev.glims.store/api/v1/:path*",
        has: [{ type: "header", key: "x-rewrite-target", value: "true" }],
      },
    ];
  },
};
module.exports = nextConfig;
