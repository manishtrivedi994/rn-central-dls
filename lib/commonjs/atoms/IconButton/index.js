"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _BaseIconButton = require("../base/BaseIconButton");
var _config = require("./config");
var _cornerRadius = _interopRequireDefault(require("../../theme/size/cornerRadius"));
var _useButtonStates = _interopRequireDefault(require("../base/hooks/useButtonStates"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const IconButtonComponent = props => {
  const {
    style,
    variant = 'SQUARE',
    size = 'MEDIUM',
    type = 'WITH_BG',
    disabled,
    isLoading,
    onPress
  } = props;
  const {
    onPressInHandler,
    onPressOutHandler,
    customStyles = {}
  } = (0, _useButtonStates.default)({
    VARIANT_STYLE_MAP: _config.VARIANT_STYLE_MAP,
    DISABLED_STYLE: _config.DISABLED,
    TEXT_VARIANT_MAP: {},
    type,
    disabled,
    isLoading,
    onPress,
    size,
    style
  });
  const {
    backgroundColor
  } = customStyles;
  return /*#__PURE__*/_react.default.createElement(_BaseIconButton.BaseIconButton, _extends({}, props, {
    onPressIn: onPressInHandler,
    onPressOut: onPressOutHandler,
    containerStyle: [st[size], style, {
      backgroundColor
    }, variant === 'ROUND' && st.ROUND_BORDER],
    inverse: type === 'INVERSE'
  }));
};
const IconButton = exports.IconButton = /*#__PURE__*/_react.default.memo(IconButtonComponent);
const st = _reactNative.StyleSheet.create({
  SMALL: {
    height: 24,
    aspectRatio: 1
  },
  MEDIUM: {
    height: 34,
    aspectRatio: 1
  },
  LARGE: {
    height: 40,
    aspectRatio: 1
  },
  ROUND_BORDER: {
    borderRadius: _cornerRadius.default.cornerRadiusFull
  }
});
//# sourceMappingURL=index.js.map