const NextFederationPlugin = require('@module-federation/nextjs-mf');
const dependencies = require("./package.json").dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { webpack } = options;
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'dashboard',
          remotes: {
            host: 'host@http://localhost:3000/_next/static/chunks/remoteEntry.js',
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './dashboard': './src/pages/dashboard.tsx',
            './header': './src/components/Header.js',
            './pages-map': './src/pages-map.ts',
          },
          shared: {
            "shared": {
              requiredVersion: "file:../shared",
              singleton: true,
            },
            "react-redux": {
              requiredVersion: "^8.1.3",
              singleton: true,
            }
          },
          extraOptions: {
          }
        }),
      );
    }

    return config;
  },
}

module.exports = nextConfig
