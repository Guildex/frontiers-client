/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://react-next-curriculum.vercel.app/' : '',
};

module.exports = nextConfig;
