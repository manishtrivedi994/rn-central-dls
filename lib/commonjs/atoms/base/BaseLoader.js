"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _icons = _interopRequireDefault(require("../../icons"));
var _themeContext = require("../../theme/themeContext");
var _useLoadingAnimation = require("./hooks/useLoadingAnimation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * BaseLoader Component
 *
 * This component renders a loading animation inside a container.
 * It uses an SVG loader and applies a rotating animation when the `isLoading` prop is true.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {StyleProp<ViewStyle>} props.containerStyle - The style to be applied to the container view.
 * @param {boolean} [props.isLoading=false] - Indicates whether the loader should be visible and animated.
 * @returns {JSX.Element | null} The rendered component or null if not loading.
 *
 * @example
 * <BaseLoader containerStyle={styles.loaderContainer} isLoading={true} />
 */

const BaseLoader = props => {
  const {
    containerStyle,
    isLoading
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const {
    loadingAnimationStyle
  } = (0, _useLoadingAnimation.useLoadingAnimation)({
    isLoading
  });
  if (!isLoading) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: loadingAnimationStyle
  }, /*#__PURE__*/_react.default.createElement(_icons.default.Loader, {
    startColor: props !== null && props !== void 0 && props.inverse ? colors.icon.defaultInverse : colors.bgFill.brand,
    endColor: props !== null && props !== void 0 && props.inverse ? colors.icon.defaultInverse : colors.bgFill.brandSecondary
  })));
};
var _default = exports.default = BaseLoader;
//# sourceMappingURL=BaseLoader.js.map