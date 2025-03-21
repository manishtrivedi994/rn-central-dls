"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _size = _interopRequireDefault(require("../../theme/size"));
var _text = require("../../typography/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseTags = ({
  containerStyle,
  label,
  textColor,
  textVariant = _text.TextTokenV3.regular_200
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [st.main, containerStyle]
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: textVariant,
    fontColor: textColor
  }, label));
};
var _default = exports.default = BaseTags;
const st = _reactNative.StyleSheet.create({
  main: {
    borderRadius: _size.default.CornerRadius.cornerRadiusFull,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: _size.default.Space.space4
  }
});
//# sourceMappingURL=BaseTags.js.map