const composePlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@guildex/react-next-curriculum-example',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = composePlugins([withTM], nextConfig);
