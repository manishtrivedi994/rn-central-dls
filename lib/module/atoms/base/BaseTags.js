import { StyleSheet, View } from 'react-native';
import React from 'react';
import size from '../../theme/size';
import { Text, TextTokenV3 } from '../../typography/text';
const BaseTags = ({
  containerStyle,
  label,
  textColor,
  textVariant = TextTokenV3.regular_200
}) => {
  return /*#__PURE__*/React.createElement(View, {
    style: [st.main, containerStyle]
  }, /*#__PURE__*/React.createElement(Text, {
    variant: textVariant,
    fontColor: textColor
  }, label));
};
export default BaseTags;
const st = StyleSheet.create({
  main: {
    borderRadius: size.CornerRadius.cornerRadiusFull,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: size.Space.space4
  }
});
//# sourceMappingURL=BaseTags.js.map