"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _color = require("../../../theme/color");
var _text = require("../../../typography/text");
var _type = require("./type");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DELAY = 3000;
const DEFAULT_DURATION = 600;
const VerticalAnimatedText = ({
  textArray,
  staticPlaceholderText,
  duration = DEFAULT_DURATION,
  enabled = true,
  direction = 'BOTTOM',
  textVariant = _text.TextTokenV3.regular_250,
  textColor = _color.color.BASE.text.defaultTertiary,
  containerHeight: height = 20,
  containerStyle = {}
}) => {
  const directionOffset = direction === _type.DirectionEnum.BOTTOM ? height : -height;
  const animatedValue = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const titles = (0, _react.useMemo)(() => {
    if (textArray && (textArray === null || textArray === void 0 ? void 0 : textArray.length) > 1) {
      return [...textArray, textArray[0]];
    }
    return textArray;
  }, [textArray]);
  (0, _react.useEffect)(() => {
    var _titles$slice, _titles$slice$map;
    const animationSeq = titles === null || titles === void 0 || (_titles$slice = titles.slice) === null || _titles$slice === void 0 || (_titles$slice = _titles$slice.call(titles, 1)) === null || _titles$slice === void 0 || (_titles$slice$map = _titles$slice.map) === null || _titles$slice$map === void 0 ? void 0 : _titles$slice$map.call(_titles$slice, (_, index) => index + 1);
    const seq = animationSeq.flatMap(itemIndex => [_reactNative.Animated.timing(animatedValue, {
      toValue: itemIndex * -directionOffset,
      duration,
      useNativeDriver: true,
      easing: _reactNative.Easing.linear
    }), _reactNative.Animated.delay(DELAY)]);
    seq.push(_reactNative.Animated.timing(animatedValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
      easing: _reactNative.Easing.linear
    }));
    const animation = _reactNative.Animated.sequence([_reactNative.Animated.delay(DELAY), _reactNative.Animated.loop(_reactNative.Animated.sequence(seq))]);
    if (enabled && (titles === null || titles === void 0 ? void 0 : titles.length) > 1) {
      animation === null || animation === void 0 || animation.start();
    }
    return () => {
      animation.reset();
      animation === null || animation === void 0 || animation.stop();
    };
  }, [animatedValue, enabled, titles.length, directionOffset, duration]);
  const textStyle = (0, _react.useMemo)(() => ({
    height
  }), [height]);
  if (!titles.length) return null;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, containerStyle]
  }, !!staticPlaceholderText && /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: textVariant,
    fontColor: textColor
  }, `${staticPlaceholderText} `), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: {
      height,
      transform: [{
        translateY: animatedValue
      }]
    }
  }, titles.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: `${item === null || item === void 0 ? void 0 : item.toString()}-${index}`,
      style: [textStyle, styles.justifyCenter]
    }, /*#__PURE__*/_react.default.createElement(_text.Text, {
      variant: textVariant,
      fontColor: textColor
    }, item));
  })));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  justifyCenter: {
    justifyContent: 'center'
  }
});
var _default = exports.default = /*#__PURE__*/_react.default.memo(VerticalAnimatedText);
//# sourceMappingURL=index.js.map