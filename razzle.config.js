"use strict";

module.exports = {
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;

    // Change the name of the server output file in production
    if (opts.env.target === "node" && !opts.env.dev) {
      config.output.filename = "index.js";
    }

    if (opts.env.target === "web") {
      config.performance = {
        maxAssetSize: 2 * 1024 * 1024,
        maxEntrypointSize: 2 * 1024 * 1024,
      };
      config.optimization = {
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendor",
              chunks: "all",
            },
            common: {
              name: "common",
              minChunks: 2,
              chunks: "all",
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }

    return config;
  },
};
