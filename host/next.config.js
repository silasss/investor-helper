const NextFederationPlugin = require('@module-federation/nextjs-mf');
const dependencies = require("./package.json").dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            dashboard: 'dashboard@http://localhost:3002/_next/static/chunks/remoteEntry.js',
          },
          exposes: {
            // './nav': './src/components/nav.js',
            // './home': './src/pages/index.ts',
            // './pages-map': './src/pages-map.ts',
          },
          shared: {
            // ...dependencies,
          }
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
