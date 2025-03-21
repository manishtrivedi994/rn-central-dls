"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideButtonText = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _text = require("../../../typography/text");
var _themeContext = require("../../../theme/themeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SlideButtonText = props => {
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const {
    title,
    containerStyle,
    fontColor = colors.text.brandInverse,
    textVariant = _text.TextTokenV3.semibold_250
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [st.container, containerStyle]
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: textVariant,
    fontColor: fontColor,
    textAlign: "center"
  }, title));
};
exports.SlideButtonText = SlideButtonText;
const st = _reactNative.StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});
//# sourceMappingURL=SlideButtonText.js.map