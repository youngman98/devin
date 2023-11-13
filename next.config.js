// next.config.js
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // 프로젝트에 유형 오류가 있어도 프로덕션 빌드가 성공적으로 완료되도록 위험한 허용을 합니다.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = withContentlayer(nextConfig);