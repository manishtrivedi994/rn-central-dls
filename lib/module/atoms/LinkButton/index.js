function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { BaseButton } from '../base/BaseButton';
import useButtonStates from '../base/hooks/useButtonStates';
import { VARIANT_STYLE_MAP, DISABLED, TEXT_VARIANT_MAP, INVERSE_VARIANT_STYLE_MAP } from './config';
const LinkButtonComponent = ({
  title,
  type = 'BRAND',
  disabled,
  isLoading,
  size,
  underline = true,
  inverse = false,
  ...props
}) => {
  const {
    onPressInHandler,
    onPressOutHandler,
    textVariant,
    customStyles,
    sizes
  } = useButtonStates({
    VARIANT_STYLE_MAP: inverse ? INVERSE_VARIANT_STYLE_MAP : VARIANT_STYLE_MAP,
    DISABLED_STYLE: DISABLED,
    TEXT_VARIANT_MAP,
    disabled,
    isLoading,
    type,
    size
  });
  const {
    fontColor
  } = customStyles;
  return /*#__PURE__*/React.createElement(View, {
    style: styles.parent
  }, /*#__PURE__*/React.createElement(BaseButton, _extends({
    iconSpacing: sizes.Space.space4,
    textVariant: textVariant,
    fontColor: fontColor,
    containerStyle: styles.containerStyle,
    textStyleContainer: styles.textStyleContainer,
    title: title,
    onPressIn: onPressInHandler,
    onPressOut: onPressOutHandler,
    underline: underline,
    disabled: disabled
  }, props)));
};
const LinkButton = /*#__PURE__*/React.memo(LinkButtonComponent);
export { LinkButton };
const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    flexShrink: 1
  },
  containerStyle: {
    borderRadius: 0,
    paddingHorizontal: 0
  },
  textStyleContainer: {
    paddingHorizontal: 0
  }
});
//# sourceMappingURL=index.js.map