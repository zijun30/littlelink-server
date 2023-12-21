"use strict";

module.exports = {
  options: {
    staticExport: {
      parallel: 5, // how many pages to render at a time
      routesExport: "routes",
      renderExport: "render",
      scriptInline: false,
      windowRoutesVariable: "RAZZLE_STATIC_ROUTES",
      windowRoutesDataVariable: "RAZZLE_STATIC_DATA_ROUTES",
    },
  },
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;

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
