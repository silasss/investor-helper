const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            // dashboard: 'dashboard@http://localhost:3002/_next/static/chunks/remoteEntry.js',
            wallet: 'wallet@http://localhost:3003/_next/static/chunks/remoteEntry.js',
          },
          exposes: {
            './rootReducer': './src/reducers/root.reducer.ts',
            './hooks': './src/app/hooks.ts',
            './store': './src/app/store.ts',
          },
          shared: {}
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
