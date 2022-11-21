/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  env: {
    ENV_HOST: process.env.ENV_HOST
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name:"main",
        filename: 'static/chunks/primaryEntry.js',
        remotes: {
          // For Windows use host.docker.internal
          shop: `shop@http://host.docker.internal:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          // For Linux use 172.17.0.1
          // shop: `shop@http://172.17.0.1:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
      })
    );
    return config
  },
}

module.exports = nextConfig
