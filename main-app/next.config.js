/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name:"main",
        filename: 'static/chunks/primaryEntry.js',
        remotes: {
          shop: `shop@http://host.docker.internal:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
      })
    );
    return config
  },
}

module.exports = nextConfig
