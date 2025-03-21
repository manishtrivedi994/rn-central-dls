"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRadioButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _text = require("../../typography/text");
var _color = require("../../theme/color");
var _size = _interopRequireDefault(require("../../theme/size"));
var _BaseRadioChildren = _interopRequireDefault(require("./BaseRadioChildren"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BaseRadioComponent = props => {
  const {
    outerContainerStyle,
    innerContainerStyle,
    checked,
    children,
    label = '',
    labelVariant = _text.TextTokenV3.regular_250,
    labelFontColor = _color.color.BASE.text.defaultPrimary,
    ...pressableProps
  } = props;
  const hasLabel = !!label;
  const boxContainerStyles = [st.base, outerContainerStyle];
  const boxContainerLabelStyles = [st.base, st.boxContainerWithLabel];
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, _extends({}, pressableProps, {
    style: hasLabel ? boxContainerLabelStyles : boxContainerStyles
  }), /*#__PURE__*/_react.default.createElement(_BaseRadioChildren.default, {
    checked: checked,
    outerContainerStyle: hasLabel ? boxContainerStyles : null,
    innerContainerStyle: innerContainerStyle
  }, children), label ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.labelContainer
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: labelVariant,
    fontColor: labelFontColor
  }, label)) : null);
};
const BaseRadioButton = exports.BaseRadioButton = /*#__PURE__*/_react.default.memo(BaseRadioComponent);
const st = _reactNative.StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxContainerWithLabel: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  labelContainer: {
    marginLeft: _size.default.Space.space8,
    flexShrink: 1
  }
});
//# sourceMappingURL=BaseRadioButton.js.map