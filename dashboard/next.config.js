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
            ...dependencies,
            "react-dom": {
                requiredVersion: dependencies['react-dom'],
                singleton: true,
            },
            react: {
                requiredVersion: dependencies['react'],
                singleton: true,
            },
            "next/dynamic": {
              requiredVersion: false,
              singleton: true,
            },
            "styled-jsx": {
              requiredVersion: false,
              singleton: true,
            },
            "next/link": {
              requiredVersion: false,
              singleton: true,
            },
            "next/router": {
              requiredVersion: false,
              singleton: true,
            },
            "next/script": {
              requiredVersion: false,
              singleton: true,
            },
            "next/head": {
              requiredVersion: false,
              singleton: true,
            },
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
