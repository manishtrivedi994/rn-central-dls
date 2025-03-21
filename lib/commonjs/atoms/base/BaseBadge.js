"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _text = require("../../typography/text");
var _size = _interopRequireDefault(require("../../theme/size"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseBadge = props => {
  const {
    textVariant = _text.TextToken.tiny_uppercase
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [st.main, props.containerStyle]
  }, !!props.icon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.icon
  }, props.icon), /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: textVariant,
    style: st.text,
    fontColor: props.textColor
  }, props.text));
};
const st = _reactNative.StyleSheet.create({
  main: {
    paddingHorizontal: _size.default.Space.space8,
    borderRadius: _size.default.CornerRadius.cornerRadius4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flexShrink: 1
  },
  icon: {
    marginRight: _size.default.Space.space4,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
var _default = exports.default = BaseBadge;
//# sourceMappingURL=BaseBadge.js.map