"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListIndicator = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _themeContext = require("../../theme/themeContext");
var _cornerRadius = _interopRequireDefault(require("../../theme/size/cornerRadius"));
var _size = _interopRequireDefault(require("../../theme/size"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DEFAULT_SLIDER_WIDTH = 48;
const ListIndicator = exports.ListIndicator = /*#__PURE__*/_react.default.memo(props => {
  const {
    scrollX,
    sliderWidth = DEFAULT_SLIDER_WIDTH,
    childItemWidth = 4,
    totalItems = 1
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const st = (0, _react.useMemo)(() => styles(colors), [colors]);
  const {
    parentStyle,
    sliderStyle
  } = (0, _react.useMemo)(() => ({
    parentStyle: {
      width: sliderWidth
    },
    sliderStyle: {
      width: sliderWidth / totalItems,
      transform: [{
        translateX: scrollX.interpolate({
          inputRange: [0, childItemWidth * totalItems],
          outputRange: [0, sliderWidth]
        })
      }]
    }
  }), [childItemWidth, sliderWidth, scrollX, totalItems]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [parentStyle, st.parent]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [st.child, sliderStyle]
  }));
});
const styles = colors => _reactNative.StyleSheet.create({
  parent: {
    height: _size.default.Size.size4,
    backgroundColor: colors.bgFill.accentSecondary,
    borderRadius: _cornerRadius.default.cornerRadius16
  },
  child: {
    position: 'absolute',
    height: _size.default.Size.size4,
    width: _size.default.Size.size8,
    borderRadius: _cornerRadius.default.cornerRadius16,
    backgroundColor: colors.bgFill.accent
  }
});
//# sourceMappingURL=index.js.map