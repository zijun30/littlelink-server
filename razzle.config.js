module.exports = {
  // ...
  modify(defaultConfig, { target, dev }, webpack) {
    if (!dev) {
      config.performance = Object.assign(
        {},
        {
          maxAssetSize: 2000000,
          maxEntrypointSize: 2000000,
          hints: false,
        }
      );
    }

    return config;
  },
};
