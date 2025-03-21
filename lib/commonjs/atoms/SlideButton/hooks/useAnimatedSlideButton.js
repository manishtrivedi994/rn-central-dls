"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimatedSlideButton = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _config = require("../config");
const useAnimatedSlideButton = props => {
  var _sliderViewDimensions;
  const {
    sliderSize,
    onSwipeEnd,
    disabled,
    onPressIn,
    onPressOut,
    onSwipeStart
  } = props;
  const sliderY = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const isSwipeCompleted = (0, _react.useRef)(false);
  const sliderViewDimensions = (0, _react.useRef)({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  });
  const {
    defaultSwipePercentage: swipePercentage,
    defaultSliderWidth,
    maximumTitleOpacity,
    minimumTitleOpacity,
    animationDuration,
    getBackAnimationDelay,
    defaultContainerSpacing
  } = _config.AnimationConfig;
  const interpolatedTextOpacity = sliderY.interpolate({
    inputRange: [0, (sliderViewDimensions === null || sliderViewDimensions === void 0 || (_sliderViewDimensions = sliderViewDimensions.current) === null || _sliderViewDimensions === void 0 ? void 0 : _sliderViewDimensions.width) || defaultSliderWidth],
    outputRange: [maximumTitleOpacity, minimumTitleOpacity]
  });
  const getMaxLimit = () => {
    var _sliderViewDimensions2;
    const sliderWidth = (sliderViewDimensions === null || sliderViewDimensions === void 0 || (_sliderViewDimensions2 = sliderViewDimensions.current) === null || _sliderViewDimensions2 === void 0 ? void 0 : _sliderViewDimensions2.width) ?? defaultSliderWidth;
    const maxLimit = sliderWidth - defaultContainerSpacing * 2 - sliderSize;
    return maxLimit;
  };
  const handleLayout = event => {
    sliderViewDimensions.current = event.nativeEvent.layout;
  };
  const navigateToStart = () => {
    _reactNative.Animated.timing(sliderY, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true
    }).start();
  };
  const sliderPanResponder = (0, _react.useRef)(_reactNative.PanResponder.create({
    onMoveShouldSetPanResponder: () => {
      if (disabled || isSwipeCompleted.current) {
        return false;
      }
      return true;
    },
    onPanResponderMove: (_e, gestureState) => {
      const {
        dx
      } = gestureState;
      const maxLimit = getMaxLimit();
      if (dx > 0 && dx < maxLimit) {
        return _reactNative.Animated.event([null, {
          dx: sliderY
        }], {
          useNativeDriver: false
        })(_e, gestureState);
      }
    },
    onPanResponderTerminate: () => {
      onPressOut === null || onPressOut === void 0 || onPressOut();
      navigateToStart();
    },
    onPanResponderRelease: (_e, gestureState) => {
      const {
        dx
      } = gestureState;
      const maxLimit = getMaxLimit();
      const crossLimit = maxLimit * swipePercentage;
      if (dx > crossLimit) {
        isSwipeCompleted.current = true;
        _reactNative.Animated.timing(sliderY, {
          toValue: maxLimit,
          useNativeDriver: true,
          duration: animationDuration / 2,
          easing: _reactNative.Easing.linear
        }).start(() => {
          onSwipeEnd === null || onSwipeEnd === void 0 || onSwipeEnd();
          setTimeout(() => {
            navigateToStart();
          }, getBackAnimationDelay);
        });
      } else {
        navigateToStart();
      }
    },
    onPanResponderStart: () => {
      onSwipeStart === null || onSwipeStart === void 0 || onSwipeStart();
      onPressIn === null || onPressIn === void 0 || onPressIn();
    },
    onPanResponderEnd: () => {
      onPressOut === null || onPressOut === void 0 || onPressOut();
    },
    onStartShouldSetPanResponder: () => !disabled
  })).current;
  return {
    sliderPanResponder,
    sliderY,
    sliderViewDimensions,
    interpolatedTextOpacity,
    handleLayout
  };
};
exports.useAnimatedSlideButton = useAnimatedSlideButton;
//# sourceMappingURL=useAnimatedSlideButton.js.map