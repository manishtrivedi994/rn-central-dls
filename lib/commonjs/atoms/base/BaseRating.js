"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _icons = _interopRequireDefault(require("../../icons"));
var _types = require("../Rating/types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
if (_reactNative.Platform.OS === 'android' && _reactNative.UIManager.setLayoutAnimationEnabledExperimental) {
  _reactNative.UIManager.setLayoutAnimationEnabledExperimental(true);
}
const BaseRating = ({
  count = 0,
  defaultRating = 0,
  onRatingChange = () => {},
  readonly = true,
  size = _types.SizeEnum.SMALL,
  color,
  activeColor,
  disabled,
  containerStyle,
  layoutAnimation = true
}) => {
  const [rating, setRating] = (0, _react.useState)(defaultRating);
  const handlePress = index => {
    if (readonly) return;
    if (layoutAnimation) {
      _reactNative.LayoutAnimation.configureNext(_reactNative.LayoutAnimation.Presets.easeInEaseOut);
    }
    const newRating = index + 1;
    setRating(newRating);
    onRatingChange(newRating);
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [st.main, containerStyle]
  }, [...Array(count)].map((_, index) => {
    const isHalfStar = index + 0.5 === rating;
    const isFullStar = index < rating && index + 0.5 !== rating;
    const starOutlinedColor = isHalfStar ? activeColor : color;
    return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
      key: `Star-${index}`,
      onPress: () => handlePress(index),
      disabled: readonly || disabled
    }, isFullStar ? /*#__PURE__*/_react.default.createElement(_icons.default.StarFilled, {
      width: size,
      height: size,
      color: activeColor
    }) : /*#__PURE__*/_react.default.createElement(_icons.default.StarOutlined, {
      halfFilled: isHalfStar,
      width: size,
      height: size,
      color: starOutlinedColor
    }));
  }));
};
var _default = exports.default = BaseRating;
const st = _reactNative.StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
//# sourceMappingURL=BaseRating.js.map