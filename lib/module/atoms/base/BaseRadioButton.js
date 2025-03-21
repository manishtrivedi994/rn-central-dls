function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text, TextTokenV3 } from '../../typography/text';
import { color } from '../../theme/color';
import size from '../../theme/size';
import BaseRadioChildren from './BaseRadioChildren';
const BaseRadioComponent = props => {
  const {
    outerContainerStyle,
    innerContainerStyle,
    checked,
    children,
    label = '',
    labelVariant = TextTokenV3.regular_250,
    labelFontColor = color.BASE.text.defaultPrimary,
    ...pressableProps
  } = props;
  const hasLabel = !!label;
  const boxContainerStyles = [st.base, outerContainerStyle];
  const boxContainerLabelStyles = [st.base, st.boxContainerWithLabel];
  return /*#__PURE__*/React.createElement(Pressable, _extends({}, pressableProps, {
    style: hasLabel ? boxContainerLabelStyles : boxContainerStyles
  }), /*#__PURE__*/React.createElement(BaseRadioChildren, {
    checked: checked,
    outerContainerStyle: hasLabel ? boxContainerStyles : null,
    innerContainerStyle: innerContainerStyle
  }, children), label ? /*#__PURE__*/React.createElement(View, {
    style: st.labelContainer
  }, /*#__PURE__*/React.createElement(Text, {
    variant: labelVariant,
    fontColor: labelFontColor
  }, label)) : null);
};
const BaseRadioButton = /*#__PURE__*/React.memo(BaseRadioComponent);
export { BaseRadioButton };
const st = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxContainerWithLabel: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  labelContainer: {
    marginLeft: size.Space.space8,
    flexShrink: 1
  }
});
//# sourceMappingURL=BaseRadioButton.js.map