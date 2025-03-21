"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _BaseDropdown = _interopRequireDefault(require("../base/BaseDropdown"));
var _themeContext = require("../../theme/themeContext");
var _config = require("./config");
var _useRapidClickHandler = _interopRequireDefault(require("../base/hooks/useRapidClickHandler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DropdownComponent = props => {
  const {
    label,
    isMandatory,
    value,
    onPress,
    disabled,
    throttle,
    placeholder
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const {
    onRapidPressHandler
  } = (0, _useRapidClickHandler.default)({
    onPress: onPress,
    throttle
  });
  const variantStyles = (0, _react.useMemo)(() => (0, _config.fetchDropdownStylingBasedOnProps)({
    isDisabled: disabled,
    isSelected: !!value,
    colors
  }), [disabled, colors, value]);
  const {
    labelFontColor,
    borderColor,
    labelVariant,
    valueFontColor,
    valueVariant
  } = variantStyles;
  return /*#__PURE__*/_react.default.createElement(_BaseDropdown.default, {
    onPress: onRapidPressHandler,
    borderColor: borderColor,
    value: value ?? placeholder,
    label: label,
    labelFontColor: labelFontColor,
    valueFontColor: valueFontColor,
    labelVariant: labelVariant,
    valueVariant: valueVariant,
    isMandatory: isMandatory,
    style: st.height,
    placeholder: placeholder
  });
};
const st = _reactNative.StyleSheet.create({
  height: {
    height: 44
  }
});
const Dropdown = exports.Dropdown = /*#__PURE__*/_react.default.memo(DropdownComponent);
//# sourceMappingURL=index.js.map