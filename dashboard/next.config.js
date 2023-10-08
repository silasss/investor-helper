const NextFederationPlugin = require('@module-federation/nextjs-mf');
const dependencies = require("./package.json").dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { webpack } = options;
    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: 'dashboard',
          remotes: {
            // host: `host@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            // './header': './components/exposedTitle.js',
            './dashboard': './src/pages/dashboard.tsx',
            './header': './src/components/Header.js',
            './pages-map': './src/pages-map.ts',
          },
          shared: {
            // ...dependencies,
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
