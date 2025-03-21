"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideButtonThumb = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _icons = _interopRequireDefault(require("../../../icons"));
var _color = require("../../../theme/color");
var _size = _interopRequireDefault(require("../../../theme/size"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SlideButtonThumb = props => {
  const {
    sliderY,
    sliderPanResponder,
    thumbStyle,
    containerStyle,
    iconColor = _color.color.BASE.icon.defaultPrimary
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, _extends({
    style: [styles.pressContainer, {
      transform: [{
        translateX: sliderY
      }]
    }, containerStyle]
  }, sliderPanResponder.panHandlers), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.slider, thumbStyle]
  }, /*#__PURE__*/_react.default.createElement(_icons.default.ChevronRightDoubleOutlined, {
    height: _size.default.IconSize.iconSize16,
    width: _size.default.IconSize.iconSize16,
    color: iconColor
  })));
};
exports.SlideButtonThumb = SlideButtonThumb;
const styles = _reactNative.StyleSheet.create({
  pressContainer: {
    padding: _size.default.Space.space4,
    position: 'absolute',
    zIndex: 1
  },
  slider: {
    backgroundColor: _color.color.BASE.bgFill.defaultPrimary,
    height: _size.default.Size.size32,
    width: _size.default.Size.size32,
    borderRadius: _size.default.CornerRadius.cornerRadius4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
//# sourceMappingURL=SlideButtonThumb.js.map