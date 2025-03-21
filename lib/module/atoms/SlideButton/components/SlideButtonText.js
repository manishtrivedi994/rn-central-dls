import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { Text, TextTokenV3 } from '../../../typography/text';
import { useTheme } from '../../../theme/themeContext';
const SlideButtonText = props => {
  const {
    colors
  } = useTheme();
  const {
    title,
    containerStyle,
    fontColor = colors.text.brandInverse,
    textVariant = TextTokenV3.semibold_250
  } = props;
  return /*#__PURE__*/React.createElement(Animated.View, {
    style: [st.container, containerStyle]
  }, /*#__PURE__*/React.createElement(Text, {
    variant: textVariant,
    fontColor: fontColor,
    textAlign: "center"
  }, title));
};
export { SlideButtonText };
const st = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});
//# sourceMappingURL=SlideButtonText.js.map