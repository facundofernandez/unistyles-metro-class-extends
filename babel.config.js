module.exports = function (api) {
  api.cache.using(() => process.env.UNISTYLES_BABEL);

  return {
    presets: ['babel-preset-expo'],
    // UNISTYLES_BABEL=1 → control: the Babel plugin only processes `src`, so node_modules keep react-native's FlatList
    plugins:
      process.env.UNISTYLES_BABEL === '1'
        ? [['react-native-unistyles/plugin', { root: 'src' }]]
        : [],
  };
};
