const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Modify the default configuration to include SVG transformer
defaultConfig.transformer = {
  ...defaultConfig.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer')
};

// Add 'svg' to the list of source extensions
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'svg'];
// Ensure 'svg' files are not treated as asset extensions
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg');

module.exports = defaultConfig;
