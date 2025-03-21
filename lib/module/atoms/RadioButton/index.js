function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import cornerRadius from '../../theme/size/cornerRadius';
import { BaseRadioButton } from '../base/BaseRadioButton';
import useRadioButtonStates from './hooks/useRadioButtonStates';
import { useTheme } from '../../theme/themeContext';
const RadioButtonComponent = props => {
  const {
    style = {},
    size = 'MEDIUM',
    disabled = false,
    checked = false,
    label,
    textState = 'DEFAULT'
  } = props;
  const {
    colors
  } = useTheme();
  const {
    onPressIn,
    onPressOut,
    customStyles,
    textVariant
  } = useRadioButtonStates({
    disabled,
    checked,
    size,
    textState
  });
  const {
    outerContainerStyle = {},
    innerContainerStyle = {}
  } = customStyles ?? {};
  const innerContainerSize = useMemo(() => ({
    width: st[size].width / 2 - 2,
    height: st[size].height / 2 - 2,
    borderRadius: st[size].borderRadius / 2 - 1
  }), [size]);
  return /*#__PURE__*/React.createElement(BaseRadioButton, _extends({}, props, {
    checked: checked,
    onPressIn: onPressIn,
    onPressOut: onPressOut,
    outerContainerStyle: [st[size], outerContainerStyle, style],
    innerContainerStyle: [innerContainerSize, innerContainerStyle],
    label: label,
    labelVariant: textVariant,
    labelFontColor: colors.text.defaultPrimary
  }));
};
const RadioButton = /*#__PURE__*/React.memo(RadioButtonComponent);
export { RadioButton };
const st = StyleSheet.create({
  SMALL: {
    height: 16,
    width: 16,
    borderRadius: cornerRadius.cornerRadius8
  },
  MEDIUM: {
    height: 20,
    width: 20,
    borderRadius: cornerRadius.cornerRadius12
  }
});
//# sourceMappingURL=index.js.map