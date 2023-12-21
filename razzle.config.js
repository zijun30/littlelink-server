module.exports = {
  // ...
  modify(defaultConfig, { target, dev }, webpack) {
    if (!dev) {
      config.performance = Object.assign(
        {},
        {
          maxAssetSize: 100000,
          maxEntrypointSize: 300000,
          hints: false,
        }
      );
    }

    return config;
  },
};
