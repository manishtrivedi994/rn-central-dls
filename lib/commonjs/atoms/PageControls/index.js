"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageControls = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BasePageControlsDot = _interopRequireDefault(require("../base/BasePageControlsDot"));
var _config = require("./config");
var _themeContext = require("../../theme/themeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * A functional component that renders a set of dots representing page navigation.
 * It uses the `BasePageControlsDot` component to display the dots and applies
 * the specified theme colors.
 *
 * @param props - The properties for the component.
 * @param props.nodes - The total number of dots to display.
 * @param props.pos - The current active position (index) of the dots.
 * @param props.inverse - (Optional) The inverse boolean for the dots. Defaults to `false`. It's to determine whether the dots should be light or dark.
 * @returns A React element representing the page navigation dots.
 *
 * @example
 * <PageControls nodes={DummyPageControlsArray.length} pos={pageControlSwipePos} />
 */

const PageControlComponent = props => {
  const {
    nodes,
    pos,
    inverse = false
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const theme = (0, _react.useMemo)(() => {
    const _ThemeColors = (0, _config.ThemeColors)(colors);
    return inverse ? _ThemeColors === null || _ThemeColors === void 0 ? void 0 : _ThemeColors.Light : _ThemeColors.Dark;
  }, [inverse, colors]);
  return /*#__PURE__*/_react.default.createElement(_BasePageControlsDot.default, {
    nodes: nodes,
    visibleNodes: _config.VISIBLIE_NODES,
    pos: pos,
    size: _config.NODE_SIZE,
    activeColor: theme.activeColor,
    inActiveColor: theme.inActiveColor
  });
};
const PageControls = exports.PageControls = /*#__PURE__*/_react.default.memo(PageControlComponent);
//# sourceMappingURL=index.js.map