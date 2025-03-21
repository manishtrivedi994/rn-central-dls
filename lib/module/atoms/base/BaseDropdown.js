import { StyleSheet, View, Pressable } from 'react-native';
import React, { useMemo } from 'react';
import size from '../../theme/size';
import { Text, TextTokenV3 } from '../../typography/text';
import { useTheme } from '../../theme/themeContext';
import Svgs from '../../icons';
const BaseDropdown = props => {
  const {
    label,
    style,
    borderColor,
    onPress,
    isMandatory,
    containerStyle,
    pressableStyle,
    valueVariant = TextTokenV3.regular_250,
    labelVariant = TextTokenV3.medium_250,
    value = '',
    numberOfLines = 1,
    labelFontColor,
    valueFontColor
  } = props;
  const {
    colors
  } = useTheme();
  const st = useMemo(() => styles(colors), [colors]);
  return /*#__PURE__*/React.createElement(View, {
    style: [containerStyle]
  }, !!label && /*#__PURE__*/React.createElement(Text, {
    variant: labelVariant,
    fontColor: colors.text[labelFontColor],
    style: st.label
  }, label, isMandatory && /*#__PURE__*/React.createElement(Text, {
    variant: labelVariant,
    fontColor: colors.text.stateError,
    style: st.label
  }, "*")), /*#__PURE__*/React.createElement(Pressable, {
    onPress: onPress,
    style: [st.baseStyle, style, {
      borderColor
    }]
  }, /*#__PURE__*/React.createElement(View, {
    style: [st.pressable, pressableStyle]
  }, /*#__PURE__*/React.createElement(Text, {
    variant: valueVariant,
    numberOfLines: numberOfLines,
    fontColor: colors.text[valueFontColor]
  }, value)), /*#__PURE__*/React.createElement(Svgs.ChevronDown, {
    color: colors.icon.defaultPrimary
  })));
};
export default /*#__PURE__*/React.memo(BaseDropdown);
const styles = colors => StyleSheet.create({
  fullFlex: {
    flex: 1
  },
  baseStyle: {
    borderWidth: 1,
    padding: size.Space.space12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: size.CornerRadius.cornerRadius8,
    backgroundColor: colors.bgFill.defaultPrimary
  },
  value: {
    textAlignVertical: 'center',
    marginStart: size.Space.space4
  },
  pressable: {
    flex: 1
  },
  label: {
    marginBottom: size.Space.space8
  }
});
//# sourceMappingURL=BaseDropdown.js.map