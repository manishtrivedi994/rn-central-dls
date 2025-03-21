import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { View, Animated } from 'react-native';
import { Sizes } from 'rn-central-dls';
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
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const [faded, setFaded] = useState(false);
  const fadeOutAnimation = useCallback(() => {
    setFaded(true);
  }, []);
  const fadeInAnimation = useCallback(() => {
    setFaded(false);
  }, []);
  useEffect(() => {
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
  const containerStyle = useMemo(() => ({
    containerStyle: {
      width: size,
      height: size,
      marginRight: Sizes.Size.size4,
      borderRadius: size / 2
    }
  }), [size]);
  const dotStyle = useMemo(() => ({
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
  return /*#__PURE__*/React.createElement(View, {
    style: containerStyle.containerStyle
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [dotStyle.dotStyle]
  }));
};
export default /*#__PURE__*/React.memo(PageControlsDotChildren);
//# sourceMappingURL=BasePageControlsDotChildren.js.map