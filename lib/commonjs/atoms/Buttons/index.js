"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _BaseButton = require("../base/BaseButton");
var _text = require("../../typography/text");
var _config = require("./config");
var _useButtonStates = _interopRequireDefault(require("../base/hooks/useButtonStates"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ButtonComponent = props => {
  const {
    type = 'PRIMARY',
    disabled = false,
    isLoading,
    size = 'SMALL',
    style,
    isBorderRounded,
    onPressIn,
    onPressOut
  } = props;
  const {
    textVariant,
    customStyles,
    onPressInHandler,
    onPressOutHandler,
    showBorder
  } = (0, _useButtonStates.default)({
    VARIANT_STYLE_MAP: _config.VARIANT_STYLE_MAP,
    TEXT_VARIANT_MAP: _config.TEXT_VARIANT_MAP,
    DISABLED_STYLE: _config.DISABLED,
    type,
    disabled,
    isLoading,
    size
  });
  const handlePressIn = (0, _react.useCallback)(() => {
    onPressInHandler();
    onPressIn === null || onPressIn === void 0 || onPressIn();
  }, [onPressIn, onPressInHandler]);
  const handlePressOut = (0, _react.useCallback)(() => {
    onPressOutHandler();
    onPressOut === null || onPressOut === void 0 || onPressOut();
  }, [onPressOut, onPressOutHandler]);
  const {
    backgroundColor,
    fontColor
  } = customStyles ?? {};
  return /*#__PURE__*/_react.default.createElement(_BaseButton.BaseButton, _extends({}, props, {
    disabled: disabled,
    textVariant: textVariant ?? _text.TextToken.label3_semibold,
    labelVariant: _text.TextTokenV3.regular_150,
    fontColor: fontColor,
    showBorder: showBorder,
    containerStyle: [style, st[size] ?? st.SMALL, {
      backgroundColor
    }],
    onPressOut: handlePressOut,
    onPressIn: handlePressIn,
    isBorderRounded: isBorderRounded
  }));
};
const Button = exports.Button = /*#__PURE__*/_react.default.memo(ButtonComponent);
const st = _reactNative.StyleSheet.create({
  SMALL: {
    height: 34
  },
  MEDIUM: {
    height: 40
  },
  LARGE: {
    height: 48
  }
});
//# sourceMappingURL=index.js.map