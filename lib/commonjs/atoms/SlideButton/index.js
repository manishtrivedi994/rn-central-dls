"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _config = require("./config");
var _BaseSlideButton = require("../base/BaseSlideButton");
var _size = _interopRequireDefault(require("../../theme/size"));
var _useButtonStates = _interopRequireDefault(require("../base/hooks/useButtonStates"));
var _SlideButtonText = require("./components/SlideButtonText");
var _SlideButtonThumb = require("./components/SlideButtonThumb");
var _useAnimatedSlideButton = require("./hooks/useAnimatedSlideButton");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SlideButtonComponent = ({
  onSwipeEnd,
  title = '',
  size = 'MEDIUM',
  isLoading = false,
  disabled = false,
  variant = 'NORMAL',
  onSwipeStart = () => {}
}) => {
  const {
    customStyles = {},
    textVariant: sizeVariant,
    onPressInHandler,
    onPressOutHandler
  } = (0, _useButtonStates.default)({
    VARIANT_STYLE_MAP: _config.VARIANT_STYLE_MAP,
    TEXT_VARIANT_MAP: _config.SIZE_VARIANT_MAP,
    DISABLED_STYLE: _config.DISABLED,
    type: variant,
    disabled,
    isLoading,
    size
  });
  const {
    containerStyle,
    textStyle,
    thumbIconStyle,
    thumbStyle
  } = customStyles;
  const {
    fontColor
  } = textStyle;
  const {
    textStyle: {
      variant: textVariant
    },
    thumbStyle: thumbSizeStyle
  } = sizeVariant;
  const {
    color: iconColor
  } = thumbIconStyle;
  const sliderSize = thumbSizeStyle.width;
  const {
    sliderPanResponder,
    sliderY,
    interpolatedTextOpacity,
    handleLayout
  } = (0, _useAnimatedSlideButton.useAnimatedSlideButton)({
    sliderSize,
    onSwipeEnd,
    disabled,
    onPressIn: onPressInHandler,
    onPressOut: onPressOutHandler,
    onSwipeStart
  });
  return /*#__PURE__*/_react.default.createElement(_BaseSlideButton.BaseSlideButton, {
    containerStyle: [st[size], containerStyle],
    isLoading: isLoading,
    onLayout: handleLayout
  }, /*#__PURE__*/_react.default.createElement(_SlideButtonText.SlideButtonText, {
    textVariant: textVariant,
    fontColor: fontColor,
    title: title,
    containerStyle: {
      opacity: interpolatedTextOpacity
    }
  }), /*#__PURE__*/_react.default.createElement(_SlideButtonThumb.SlideButtonThumb, {
    sliderY: sliderY,
    sliderPanResponder: sliderPanResponder,
    thumbStyle: [thumbSizeStyle, thumbStyle],
    iconColor: iconColor
  }));
};
const SlideButton = exports.SlideButton = /*#__PURE__*/_react.default.memo(SlideButtonComponent);
const st = _reactNative.StyleSheet.create({
  MEDIUM: {
    height: _size.default.Size.size40,
    borderRadius: _size.default.CornerRadius.cornerRadius8
  },
  LARGE: {
    height: _size.default.Size.size48,
    borderRadius: _size.default.CornerRadius.cornerRadius8
  }
});
//# sourceMappingURL=index.js.map