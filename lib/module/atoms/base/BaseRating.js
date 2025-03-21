import React, { useState } from 'react';
import { Platform, Pressable, StyleSheet, View, UIManager, LayoutAnimation } from 'react-native';
import Svgs from '../../icons';
import { SizeEnum } from '../Rating/types';
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const BaseRating = ({
  count = 0,
  defaultRating = 0,
  onRatingChange = () => {},
  readonly = true,
  size = SizeEnum.SMALL,
  color,
  activeColor,
  disabled,
  containerStyle,
  layoutAnimation = true
}) => {
  const [rating, setRating] = useState(defaultRating);
  const handlePress = index => {
    if (readonly) return;
    if (layoutAnimation) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    const newRating = index + 1;
    setRating(newRating);
    onRatingChange(newRating);
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [st.main, containerStyle]
  }, [...Array(count)].map((_, index) => {
    const isHalfStar = index + 0.5 === rating;
    const isFullStar = index < rating && index + 0.5 !== rating;
    const starOutlinedColor = isHalfStar ? activeColor : color;
    return /*#__PURE__*/React.createElement(Pressable, {
      key: `Star-${index}`,
      onPress: () => handlePress(index),
      disabled: readonly || disabled
    }, isFullStar ? /*#__PURE__*/React.createElement(Svgs.StarFilled, {
      width: size,
      height: size,
      color: activeColor
    }) : /*#__PURE__*/React.createElement(Svgs.StarOutlined, {
      halfFilled: isHalfStar,
      width: size,
      height: size,
      color: starOutlinedColor
    }));
  }));
};
export default BaseRating;
const st = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
//# sourceMappingURL=BaseRating.js.map