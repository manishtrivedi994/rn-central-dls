"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _size = _interopRequireDefault(require("../../theme/size"));
var _text = require("../../typography/text");
var _themeContext = require("../../theme/themeContext");
var _icons = _interopRequireDefault(require("../../icons"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BaseDropdown = props => {
  const {
    label,
    style,
    borderColor,
    onPress,
    isMandatory,
    containerStyle,
    pressableStyle,
    valueVariant = _text.TextTokenV3.regular_250,
    labelVariant = _text.TextTokenV3.medium_250,
    value = '',
    numberOfLines = 1,
    labelFontColor,
    valueFontColor
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const st = (0, _react.useMemo)(() => styles(colors), [colors]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [containerStyle]
  }, !!label && /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: labelVariant,
    fontColor: colors.text[labelFontColor],
    style: st.label
  }, label, isMandatory && /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: labelVariant,
    fontColor: colors.text.stateError,
    style: st.label
  }, "*")), /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: onPress,
    style: [st.baseStyle, style, {
      borderColor
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [st.pressable, pressableStyle]
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: valueVariant,
    numberOfLines: numberOfLines,
    fontColor: colors.text[valueFontColor]
  }, value)), /*#__PURE__*/_react.default.createElement(_icons.default.ChevronDown, {
    color: colors.icon.defaultPrimary
  })));
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(BaseDropdown);
const styles = colors => _reactNative.StyleSheet.create({
  fullFlex: {
    flex: 1
  },
  baseStyle: {
    borderWidth: 1,
    padding: _size.default.Space.space12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: _size.default.CornerRadius.cornerRadius8,
    backgroundColor: colors.bgFill.defaultPrimary
  },
  value: {
    textAlignVertical: 'center',
    marginStart: _size.default.Space.space4
  },
  pressable: {
    flex: 1
  },
  label: {
    marginBottom: _size.default.Space.space8
  }
});
//# sourceMappingURL=BaseDropdown.js.map