"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _rnCentralDls = require("rn-central-dls");
var _icons = _interopRequireDefault(require("../../icons"));
var _config = require("./config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SwitchChip = ({
  onPress,
  isActive,
  color,
  size,
  haveTick,
  variant
}) => {
  const {
    colors
  } = (0, _rnCentralDls.useTheme)();
  const {
    config: {
      switchContainerWidth,
      circleDiameter
    },
    circleContainerStyle,
    circleStyle
  } = _react.default.useMemo(() => (0, _config.getSwitchConfig)({
    color,
    size
  }), [color, size]);
  const isDisabled = variant === 'disabled';
  const layoutDiff = switchContainerWidth - circleDiameter;
  const animatedValue = _react.default.useRef(new _reactNative.Animated.Value(isActive ? layoutDiff : 0)).current;
  const isFirstTime = _react.default.useRef(true);
  const styles = _react.default.useMemo(() => makeStyles(colors), [colors]);
  const toggleSwitch = (0, _react.useCallback)(() => {
    const toValue = isActive ? layoutDiff : 0;
    _reactNative.Animated.timing(animatedValue, {
      toValue,
      duration: 200,
      useNativeDriver: true,
      easing: _reactNative.Easing.linear
    }).start();
  }, [animatedValue, isActive, layoutDiff]);
  const onPressHandler = (0, _react.useCallback)(() => {
    toggleSwitch();
    onPress === null || onPress === void 0 || onPress(!isActive);
  }, [isActive, onPress, toggleSwitch]);
  const circleAnimatedStyle = _react.default.useMemo(() => ({
    transform: [{
      translateX: animatedValue.interpolate({
        inputRange: [0, layoutDiff],
        outputRange: [0, layoutDiff],
        extrapolate: 'clamp'
      })
    }]
  }), [animatedValue, layoutDiff]);
  const tickAnimatedStyle = _react.default.useMemo(() => ({
    opacity: animatedValue.interpolate({
      inputRange: [0, layoutDiff / 2, layoutDiff],
      outputRange: [0, 0.2, 1],
      extrapolate: 'clamp'
    })
  }), [animatedValue, layoutDiff]);
  const backgroundAnimatedStyle = _react.default.useMemo(() => ({
    opacity: isDisabled && isActive ? 1 : animatedValue.interpolate({
      inputRange: [0, layoutDiff / 2, layoutDiff],
      outputRange: [1, 0.8, 0],
      extrapolate: 'clamp'
    })
  }), [animatedValue, layoutDiff, isActive, isDisabled]);
  (0, _react.useEffect)(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }
    toggleSwitch();
  }, [toggleSwitch]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: isDisabled ? undefined : onPressHandler
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.switchContainer, circleContainerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.circle, circleStyle, circleAnimatedStyle]
  }, haveTick && /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: tickAnimatedStyle
  }, /*#__PURE__*/_react.default.createElement(_icons.default.Check, {
    color: color
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.colorFullBgContainer, backgroundAnimatedStyle]
  })));
};
const Switch = ({
  label,
  description,
  onToggle,
  isActive = false,
  variant = 'default',
  size = 'medium'
}) => {
  const {
    colors
  } = (0, _rnCentralDls.useTheme)();
  const styles = _react.default.useMemo(() => makeStyles(colors), [colors]);
  const {
    descriptionColor,
    labelColor,
    switchColor,
    haveTick
  } = _react.default.useMemo(() => {
    return (0, _config.getSwitchStyles)({
      colors,
      variant
    });
  }, [colors, variant]);
  const _onPress = (0, _react.useCallback)(_isActive => {
    onToggle === null || onToggle === void 0 || onToggle(_isActive);
  }, [onToggle]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(SwitchChip, {
    isActive: isActive,
    onPress: _onPress,
    size: size,
    color: switchColor,
    haveTick: haveTick,
    variant: variant
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.titleContainer
  }, !!label && /*#__PURE__*/_react.default.createElement(_rnCentralDls.Text, {
    variant: _rnCentralDls.TextTokenV3.semibold_250,
    fontColor: labelColor
  }, label), !!label && !!description && /*#__PURE__*/_react.default.createElement(_rnCentralDls.Text, {
    variant: _rnCentralDls.TextTokenV3.regular_250,
    fontColor: descriptionColor
  }, description)));
};
const makeStyles = color => _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: _rnCentralDls.Sizes.Space.space16
  },
  switchContainer: {
    borderRadius: _rnCentralDls.Sizes.CornerRadius.cornerRadius12,
    overflow: 'hidden'
  },
  circle: {
    backgroundColor: color.bgFill.defaultPrimary,
    borderWidth: 0.5,
    borderColor: color.border.defaultPrimary,
    overflow: 'hidden',
    elevation: 1,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorFullBgContainer: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    backgroundColor: color.bgFill.defaultTertiary,
    overflow: 'hidden',
    borderRadius: _rnCentralDls.Sizes.CornerRadius.cornerRadius12,
    borderWidth: 1,
    borderColor: color.border.defaultPrimary
  },
  titleContainer: {
    gap: _rnCentralDls.Sizes.Space.space2
  }
});
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Switch);
//# sourceMappingURL=index.js.map