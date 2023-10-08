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
          }
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
