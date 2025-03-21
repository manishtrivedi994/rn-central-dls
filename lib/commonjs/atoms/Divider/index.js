"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _themeContext = require("../../theme/themeContext");
var _text = require("../../typography/text");
var _rnCentralDls = require("rn-central-dls");
var _icons = _interopRequireDefault(require("../../icons"));
var _locale = _interopRequireDefault(require("../../locale"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DefaultDivider = () => {
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const styles = (0, _react.useMemo)(() => st(colors), [colors]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.divider
  });
};
const DottedDivider = () => {
  const [dividerLength, setDividerLength] = (0, _react.useState)(0);
  const onLayout = event => {
    const {
      width
    } = event.nativeEvent.layout;
    setDividerLength(width);
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    onLayout: onLayout
  }, /*#__PURE__*/_react.default.createElement(_icons.default.DashedLine, {
    width: dividerLength
  }));
};
const ORDivider = () => {
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const styles = (0, _react.useMemo)(() => st(colors), [colors]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.orLine
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.divider
  }), /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: _text.TextTokenV3.semibold_200,
    fontColor: colors.text.defaultTertiary,
    style: styles.or
  }, _locale.default.OR), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.divider
  }));
};
const Dividers = {
  DEFAULT: /*#__PURE__*/_react.default.createElement(DefaultDivider, null),
  OR: /*#__PURE__*/_react.default.createElement(ORDivider, null),
  DOTTED: /*#__PURE__*/_react.default.createElement(DottedDivider, null)
};
const DividerComponent = props => {
  const {
    type = 'DEFAULT',
    style
  } = props ?? {};
  return Dividers[type] ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  }, Dividers[type]) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};
const st = colors => _reactNative.StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.border.defaultDisabled,
    flex: 1
  },
  or: {
    marginHorizontal: _rnCentralDls.Sizes.Space.space8
  },
  orLine: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
const Divider = exports.Divider = /*#__PURE__*/_react.default.memo(DividerComponent);
//# sourceMappingURL=index.js.map