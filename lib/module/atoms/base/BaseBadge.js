import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextToken } from '../../typography/text';
import size from '../../theme/size';
const BaseBadge = props => {
  const {
    textVariant = TextToken.tiny_uppercase
  } = props;
  return /*#__PURE__*/React.createElement(View, {
    style: [st.main, props.containerStyle]
  }, !!props.icon && /*#__PURE__*/React.createElement(View, {
    style: st.icon
  }, props.icon), /*#__PURE__*/React.createElement(Text, {
    variant: textVariant,
    style: st.text,
    fontColor: props.textColor
  }, props.text));
};
const st = StyleSheet.create({
  main: {
    paddingHorizontal: size.Space.space8,
    borderRadius: size.CornerRadius.cornerRadius4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flexShrink: 1
  },
  icon: {
    marginRight: size.Space.space4,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default BaseBadge;
//# sourceMappingURL=BaseBadge.js.map