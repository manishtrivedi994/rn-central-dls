"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkButton = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _BaseButton = require("../base/BaseButton");
var _useButtonStates = _interopRequireDefault(require("../base/hooks/useButtonStates"));
var _config = require("./config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const LinkButtonComponent = ({
  title,
  type = 'BRAND',
  disabled,
  isLoading,
  size,
  underline = true,
  inverse = false,
  ...props
}) => {
  const {
    onPressInHandler,
    onPressOutHandler,
    textVariant,
    customStyles,
    sizes
  } = (0, _useButtonStates.default)({
    VARIANT_STYLE_MAP: inverse ? _config.INVERSE_VARIANT_STYLE_MAP : _config.VARIANT_STYLE_MAP,
    DISABLED_STYLE: _config.DISABLED,
    TEXT_VARIANT_MAP: _config.TEXT_VARIANT_MAP,
    disabled,
    isLoading,
    type,
    size
  });
  const {
    fontColor
  } = customStyles;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.parent
  }, /*#__PURE__*/_react.default.createElement(_BaseButton.BaseButton, _extends({
    iconSpacing: sizes.Space.space4,
    textVariant: textVariant,
    fontColor: fontColor,
    containerStyle: styles.containerStyle,
    textStyleContainer: styles.textStyleContainer,
    title: title,
    onPressIn: onPressInHandler,
    onPressOut: onPressOutHandler,
    underline: underline,
    disabled: disabled
  }, props)));
};
const LinkButton = exports.LinkButton = /*#__PURE__*/_react.default.memo(LinkButtonComponent);
const styles = _reactNative.StyleSheet.create({
  parent: {
    flexDirection: 'row',
    flexShrink: 1
  },
  containerStyle: {
    borderRadius: 0,
    paddingHorizontal: 0
  },
  textStyleContainer: {
    paddingHorizontal: 0
  }
});
//# sourceMappingURL=index.js.map