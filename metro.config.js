const { getDefaultConfig } = require('expo/metro-config');
const { withUnistylesConfig } = require('react-native-unistyles/metro');

const config = getDefaultConfig(__dirname);

// UNISTYLES_BABEL=1 → control: Babel plugin instead of the Metro integration (see babel.config.js)
module.exports =
  process.env.UNISTYLES_BABEL === '1' ? config : withUnistylesConfig(config);
