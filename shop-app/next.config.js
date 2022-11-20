/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "shop",
        filename: "static/chunks/remoteEntry.js",
        remotes: {},
        exposes: {
          "./header": "./components/Header",
        },
        shared: {}
      })
    );
    return config
  },  
}