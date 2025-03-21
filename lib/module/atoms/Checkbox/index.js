function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet } from 'react-native';
import cornerRadius from '../../theme/size/cornerRadius';
import { BaseRadioButton } from '../base/BaseRadioButton';
import useCheckboxStates from './hooks/useCheckboxStates';
import Size from '../../theme/size';
import Svgs from '../../icons';
import { useTheme } from '../../theme/themeContext';
const CheckboxButtonComponent = props => {
  const {
    size = 'MEDIUM',
    disabled = false,
    checked = false,
    indeterminate = false,
    type = 'SQUARE',
    label = '',
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
  } = useCheckboxStates({
    disabled,
    checked,
    indeterminate,
    size,
    textState
  });
  const {
    outerContainerStyle = {},
    iconStyle
  } = customStyles ?? {};
  const {
    color: iconColor
  } = iconStyle;
  const iconStyleKey = `${size}_ICON`;
  const renderIcon = () => {
    const iconStyles = st[iconStyleKey];
    if (checked) {
      return /*#__PURE__*/React.createElement(Svgs.CheckOutlined, _extends({}, iconStyles ?? {}, {
        color: iconColor
      }));
    } else if (indeterminate) {
      return /*#__PURE__*/React.createElement(Svgs.MinusOutlined, _extends({}, iconStyles ?? {}, {
        color: iconColor
      }));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  return /*#__PURE__*/React.createElement(BaseRadioButton, _extends({}, props, {
    checked: checked,
    onPressIn: onPressIn,
    onPressOut: onPressOut,
    outerContainerStyle: [st[size], st[type], outerContainerStyle],
    label: label,
    labelVariant: textVariant,
    labelFontColor: colors.text.defaultPrimary
  }), renderIcon());
};
const Checkbox = /*#__PURE__*/React.memo(CheckboxButtonComponent);
export { Checkbox };
const st = StyleSheet.create({
  SMALL: {
    height: Size.Size.size16,
    width: Size.Size.size16,
    borderRadius: cornerRadius.cornerRadius4
  },
  MEDIUM: {
    height: Size.Size.size20,
    width: Size.Size.size20,
    borderRadius: cornerRadius.cornerRadius4
  },
  SMALL_ICON: {
    height: Size.Size.size10,
    width: Size.Size.size10
  },
  MEDIUM_ICON: {
    height: Size.IconSize.iconSize14,
    width: Size.IconSize.iconSize14
  },
  CIRCLE: {
    borderRadius: Size.CornerRadius.cornerRadiusFull
  },
  SQUARE: {}
});
//# sourceMappingURL=index.js.map