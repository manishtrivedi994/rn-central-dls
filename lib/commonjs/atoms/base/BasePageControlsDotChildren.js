"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _rnCentralDls = require("rn-central-dls");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PageControlsDotChildren = ({
  pos = 0,
  index = 0,
  min,
  max,
  nodes,
  visibleNodes,
  size,
  activeColor,
  inActiveColor
}) => {
  const scaleAnimation = (0, _react.useRef)(new _reactNative.Animated.Value(1)).current;
  const [faded, setFaded] = (0, _react.useState)(false);
  const fadeOutAnimation = (0, _react.useCallback)(() => {
    setFaded(true);
  }, []);
  const fadeInAnimation = (0, _react.useCallback)(() => {
    setFaded(false);
  }, []);
  (0, _react.useEffect)(() => {
    /**
     * A function that generates a scale value based on the provided parameters.
     * This function is used to control the size of a dot in a page control component.
     *
     * @returns A scale value (number) that determines the size of the dot.
     * The scale value is calculated based on the position of the dot relative to the min and max values,
     * and whether the dot is within the visible range or at the boundaries.
     **/
    const SizeGen = () => {
      const isOutOfRange = index < min - 1 || index > max + 1;
      const isWithinRange = index > min - 2 && index < max + 2;
      const isAtBoundary = max === index || min === index && index !== 1;
      const isNearBoundary = max + 1 === index || min - 1 === index && index !== 0;
      if (!faded && isOutOfRange) {
        fadeOutAnimation();
      } else if (isWithinRange) {
        fadeInAnimation();
      }
      if (nodes <= visibleNodes) {
        return 1;
      }
      if (index >= nodes - 2 && max + 1 === nodes - 1) {
        return 1;
      }
      if (isAtBoundary) {
        return 0.5;
      }
      if (isNearBoundary) {
        return 0;
      }
      return 1; // Default scale value
    };
    scaleAnimation.setValue(SizeGen());
  }, [max, pos, min, nodes, index, scaleAnimation, faded, visibleNodes, fadeOutAnimation, fadeInAnimation]);
  const scale = scaleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
    extrapolate: 'clamp'
  });
  const containerStyle = (0, _react.useMemo)(() => ({
    containerStyle: {
      width: size,
      height: size,
      marginRight: _rnCentralDls.Sizes.Size.size4,
      borderRadius: size / 2
    }
  }), [size]);
  const dotStyle = (0, _react.useMemo)(() => ({
    dotStyle: {
      width: size,
      height: size,
      borderRadius: size / 2,
      opacity: +!faded,
      backgroundColor: pos === index ? activeColor : inActiveColor,
      transform: [{
        scale: scale
      }]
    }
  }), [size, faded, pos, index, activeColor, inActiveColor, scale]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: containerStyle.containerStyle
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [dotStyle.dotStyle]
  }));
};
var _default = exports.default = /*#__PURE__*/_react.default.memo(PageControlsDotChildren);
//# sourceMappingURL=BasePageControlsDotChildren.js.map