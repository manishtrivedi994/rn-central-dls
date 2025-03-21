import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import BaseDropdown from '../base/BaseDropdown';
import { useTheme } from '../../theme/themeContext';
import { fetchDropdownStylingBasedOnProps } from './config';
import useRapidClickHandler from '../base/hooks/useRapidClickHandler';
const DropdownComponent = props => {
  const {
    label,
    isMandatory,
    value,
    onPress,
    disabled,
    throttle,
    placeholder
  } = props;
  const {
    colors
  } = useTheme();
  const {
    onRapidPressHandler
  } = useRapidClickHandler({
    onPress: onPress,
    throttle
  });
  const variantStyles = useMemo(() => fetchDropdownStylingBasedOnProps({
    isDisabled: disabled,
    isSelected: !!value,
    colors
  }), [disabled, colors, value]);
  const {
    labelFontColor,
    borderColor,
    labelVariant,
    valueFontColor,
    valueVariant
  } = variantStyles;
  return /*#__PURE__*/React.createElement(BaseDropdown, {
    onPress: onRapidPressHandler,
    borderColor: borderColor,
    value: value ?? placeholder,
    label: label,
    labelFontColor: labelFontColor,
    valueFontColor: valueFontColor,
    labelVariant: labelVariant,
    valueVariant: valueVariant,
    isMandatory: isMandatory,
    style: st.height,
    placeholder: placeholder
  });
};
const st = StyleSheet.create({
  height: {
    height: 44
  }
});
export const Dropdown = /*#__PURE__*/React.memo(DropdownComponent);
//# sourceMappingURL=index.js.map