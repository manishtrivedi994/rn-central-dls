import React, { memo, useCallback, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing, Pressable } from 'react-native';
import { Sizes, Text, TextTokenV3, useTheme } from 'rn-central-dls';
import Svgs from '../../icons';
import { getSwitchConfig, getSwitchStyles } from './config';
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
  } = useTheme();
  const {
    config: {
      switchContainerWidth,
      circleDiameter
    },
    circleContainerStyle,
    circleStyle
  } = React.useMemo(() => getSwitchConfig({
    color,
    size
  }), [color, size]);
  const isDisabled = variant === 'disabled';
  const layoutDiff = switchContainerWidth - circleDiameter;
  const animatedValue = React.useRef(new Animated.Value(isActive ? layoutDiff : 0)).current;
  const isFirstTime = React.useRef(true);
  const styles = React.useMemo(() => makeStyles(colors), [colors]);
  const toggleSwitch = useCallback(() => {
    const toValue = isActive ? layoutDiff : 0;
    Animated.timing(animatedValue, {
      toValue,
      duration: 200,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();
  }, [animatedValue, isActive, layoutDiff]);
  const onPressHandler = useCallback(() => {
    toggleSwitch();
    onPress === null || onPress === void 0 || onPress(!isActive);
  }, [isActive, onPress, toggleSwitch]);
  const circleAnimatedStyle = React.useMemo(() => ({
    transform: [{
      translateX: animatedValue.interpolate({
        inputRange: [0, layoutDiff],
        outputRange: [0, layoutDiff],
        extrapolate: 'clamp'
      })
    }]
  }), [animatedValue, layoutDiff]);
  const tickAnimatedStyle = React.useMemo(() => ({
    opacity: animatedValue.interpolate({
      inputRange: [0, layoutDiff / 2, layoutDiff],
      outputRange: [0, 0.2, 1],
      extrapolate: 'clamp'
    })
  }), [animatedValue, layoutDiff]);
  const backgroundAnimatedStyle = React.useMemo(() => ({
    opacity: isDisabled && isActive ? 1 : animatedValue.interpolate({
      inputRange: [0, layoutDiff / 2, layoutDiff],
      outputRange: [1, 0.8, 0],
      extrapolate: 'clamp'
    })
  }), [animatedValue, layoutDiff, isActive, isDisabled]);
  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }
    toggleSwitch();
  }, [toggleSwitch]);
  return /*#__PURE__*/React.createElement(Pressable, {
    onPress: isDisabled ? undefined : onPressHandler
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.switchContainer, circleContainerStyle]
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.circle, circleStyle, circleAnimatedStyle]
  }, haveTick && /*#__PURE__*/React.createElement(Animated.View, {
    style: tickAnimatedStyle
  }, /*#__PURE__*/React.createElement(Svgs.Check, {
    color: color
  }))), /*#__PURE__*/React.createElement(Animated.View, {
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
  } = useTheme();
  const styles = React.useMemo(() => makeStyles(colors), [colors]);
  const {
    descriptionColor,
    labelColor,
    switchColor,
    haveTick
  } = React.useMemo(() => {
    return getSwitchStyles({
      colors,
      variant
    });
  }, [colors, variant]);
  const _onPress = useCallback(_isActive => {
    onToggle === null || onToggle === void 0 || onToggle(_isActive);
  }, [onToggle]);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(SwitchChip, {
    isActive: isActive,
    onPress: _onPress,
    size: size,
    color: switchColor,
    haveTick: haveTick,
    variant: variant
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.titleContainer
  }, !!label && /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.semibold_250,
    fontColor: labelColor
  }, label), !!label && !!description && /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.regular_250,
    fontColor: descriptionColor
  }, description)));
};
const makeStyles = color => StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: Sizes.Space.space16
  },
  switchContainer: {
    borderRadius: Sizes.CornerRadius.cornerRadius12,
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
    ...StyleSheet.absoluteFillObject,
    backgroundColor: color.bgFill.defaultTertiary,
    overflow: 'hidden',
    borderRadius: Sizes.CornerRadius.cornerRadius12,
    borderWidth: 1,
    borderColor: color.border.defaultPrimary
  },
  titleContainer: {
    gap: Sizes.Space.space2
  }
});
export default /*#__PURE__*/memo(Switch);
//# sourceMappingURL=index.js.map