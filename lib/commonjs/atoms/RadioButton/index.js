"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _cornerRadius = _interopRequireDefault(require("../../theme/size/cornerRadius"));
var _BaseRadioButton = require("../base/BaseRadioButton");
var _useRadioButtonStates = _interopRequireDefault(require("./hooks/useRadioButtonStates"));
var _themeContext = require("../../theme/themeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RadioButtonComponent = props => {
  const {
    style = {},
    size = 'MEDIUM',
    disabled = false,
    checked = false,
    label,
    textState = 'DEFAULT'
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const {
    onPressIn,
    onPressOut,
    customStyles,
    textVariant
  } = (0, _useRadioButtonStates.default)({
    disabled,
    checked,
    size,
    textState
  });
  const {
    outerContainerStyle = {},
    innerContainerStyle = {}
  } = customStyles ?? {};
  const innerContainerSize = (0, _react.useMemo)(() => ({
    width: st[size].width / 2 - 2,
    height: st[size].height / 2 - 2,
    borderRadius: st[size].borderRadius / 2 - 1
  }), [size]);
  return /*#__PURE__*/_react.default.createElement(_BaseRadioButton.BaseRadioButton, _extends({}, props, {
    checked: checked,
    onPressIn: onPressIn,
    onPressOut: onPressOut,
    outerContainerStyle: [st[size], outerContainerStyle, style],
    innerContainerStyle: [innerContainerSize, innerContainerStyle],
    label: label,
    labelVariant: textVariant,
    labelFontColor: colors.text.defaultPrimary
  }));
};
const RadioButton = exports.RadioButton = /*#__PURE__*/_react.default.memo(RadioButtonComponent);
const st = _reactNative.StyleSheet.create({
  SMALL: {
    height: 16,
    width: 16,
    borderRadius: _cornerRadius.default.cornerRadius8
  },
  MEDIUM: {
    height: 20,
    width: 20,
    borderRadius: _cornerRadius.default.cornerRadius12
  }
});
//# sourceMappingURL=index.js.map