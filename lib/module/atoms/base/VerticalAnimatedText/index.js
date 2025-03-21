import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, StyleSheet, View, Easing } from 'react-native';
import { color } from '../../../theme/color';
import { Text, TextTokenV3 } from '../../../typography/text';
import { DirectionEnum } from './type';
const DELAY = 3000;
const DEFAULT_DURATION = 600;
const VerticalAnimatedText = ({
  textArray,
  staticPlaceholderText,
  duration = DEFAULT_DURATION,
  enabled = true,
  direction = 'BOTTOM',
  textVariant = TextTokenV3.regular_250,
  textColor = color.BASE.text.defaultTertiary,
  containerHeight: height = 20,
  containerStyle = {}
}) => {
  const directionOffset = direction === DirectionEnum.BOTTOM ? height : -height;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const titles = useMemo(() => {
    if (textArray && (textArray === null || textArray === void 0 ? void 0 : textArray.length) > 1) {
      return [...textArray, textArray[0]];
    }
    return textArray;
  }, [textArray]);
  useEffect(() => {
    var _titles$slice, _titles$slice$map;
    const animationSeq = titles === null || titles === void 0 || (_titles$slice = titles.slice) === null || _titles$slice === void 0 || (_titles$slice = _titles$slice.call(titles, 1)) === null || _titles$slice === void 0 || (_titles$slice$map = _titles$slice.map) === null || _titles$slice$map === void 0 ? void 0 : _titles$slice$map.call(_titles$slice, (_, index) => index + 1);
    const seq = animationSeq.flatMap(itemIndex => [Animated.timing(animatedValue, {
      toValue: itemIndex * -directionOffset,
      duration,
      useNativeDriver: true,
      easing: Easing.linear
    }), Animated.delay(DELAY)]);
    seq.push(Animated.timing(animatedValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
      easing: Easing.linear
    }));
    const animation = Animated.sequence([Animated.delay(DELAY), Animated.loop(Animated.sequence(seq))]);
    if (enabled && (titles === null || titles === void 0 ? void 0 : titles.length) > 1) {
      animation === null || animation === void 0 || animation.start();
    }
    return () => {
      animation.reset();
      animation === null || animation === void 0 || animation.stop();
    };
  }, [animatedValue, enabled, titles.length, directionOffset, duration]);
  const textStyle = useMemo(() => ({
    height
  }), [height]);
  if (!titles.length) return null;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, containerStyle]
  }, !!staticPlaceholderText && /*#__PURE__*/React.createElement(Text, {
    variant: textVariant,
    fontColor: textColor
  }, `${staticPlaceholderText} `), /*#__PURE__*/React.createElement(Animated.View, {
    style: {
      height,
      transform: [{
        translateY: animatedValue
      }]
    }
  }, titles.map((item, index) => {
    return /*#__PURE__*/React.createElement(View, {
      key: `${item === null || item === void 0 ? void 0 : item.toString()}-${index}`,
      style: [textStyle, styles.justifyCenter]
    }, /*#__PURE__*/React.createElement(Text, {
      variant: textVariant,
      fontColor: textColor
    }, item));
  })));
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  justifyCenter: {
    justifyContent: 'center'
  }
});
export default /*#__PURE__*/React.memo(VerticalAnimatedText);
//# sourceMappingURL=index.js.map