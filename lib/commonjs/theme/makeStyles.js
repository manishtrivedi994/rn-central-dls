"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStyles = void 0;
var _reactNative = require("react-native");
var _themeContext = require("./themeContext");
/**
 * Creates a custom hook for generating styles based on the current theme.
 * Usage:
 * const useStyles = makeStyles(({ colors }) => ({
 *   container: {
 *     flex: 1,
 *     backgroundColor: colors.bgFill.defaultPrimary,
 *   },
 * }));
 *
 * const useStylesWithParams = makeStyles<{ color: string }>(({ colors, params }) => ({
 *   container: {
 *     flex: 1,
 *     backgroundColor: colors.bgFill.defaultPrimary,
 *     borderColor: params?.color,
 *   },
 * }));
 *
 * In a component:
 * const { styles, colors } = useStyles();
 * const { styles, colors } = useStylesWithParams({ color: 'red' });
 *
 * @param {Function} _st - A function that takes the theme object and returns a styles object.
 * @returns {Function} A custom hook that provides the generated styles and colors.
 */
const makeStyles = _st => {
  return params => {
    const {
      colors,
      gradientColor,
      module,
      sizes
    } = (0, _themeContext.useTheme)();
    return {
      styles: _reactNative.StyleSheet.create(_st({
        colors,
        params,
        gradientColor,
        module,
        sizes
      })),
      colors,
      params,
      gradientColor,
      module,
      sizes
    };
  };
};
exports.makeStyles = makeStyles;
//# sourceMappingURL=makeStyles.js.map