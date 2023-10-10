const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { webpack } = options;
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'wallet',
          remotes: {},
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './wallet': './src/pages/wallet.tsx',
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
