module.exports = {
  // ...
  modify(defaultConfig, { target, dev }, webpack) {
    if (!dev) {
      config.performance = Object.assign(
        {},
        {
          maxAssetSize: Infinity,
          maxEntrypointSize: Infinity,
          hints: false,
        }
      );
    }

    return config;
  },
};
