function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { StyleSheet } from 'react-native';
import React, { useCallback } from 'react';
import { BaseButton } from '../base/BaseButton';
import { TextToken, TextTokenV3 } from '../../typography/text';
import { DISABLED, TEXT_VARIANT_MAP, VARIANT_STYLE_MAP } from './config';
import useButtonStates from '../base/hooks/useButtonStates';
const ButtonComponent = props => {
  const {
    type = 'PRIMARY',
    disabled = false,
    isLoading,
    size = 'SMALL',
    style,
    isBorderRounded,
    onPressIn,
    onPressOut
  } = props;
  const {
    textVariant,
    customStyles,
    onPressInHandler,
    onPressOutHandler,
    showBorder
  } = useButtonStates({
    VARIANT_STYLE_MAP,
    TEXT_VARIANT_MAP,
    DISABLED_STYLE: DISABLED,
    type,
    disabled,
    isLoading,
    size
  });
  const handlePressIn = useCallback(() => {
    onPressInHandler();
    onPressIn === null || onPressIn === void 0 || onPressIn();
  }, [onPressIn, onPressInHandler]);
  const handlePressOut = useCallback(() => {
    onPressOutHandler();
    onPressOut === null || onPressOut === void 0 || onPressOut();
  }, [onPressOut, onPressOutHandler]);
  const {
    backgroundColor,
    fontColor
  } = customStyles ?? {};
  return /*#__PURE__*/React.createElement(BaseButton, _extends({}, props, {
    disabled: disabled,
    textVariant: textVariant ?? TextToken.label3_semibold,
    labelVariant: TextTokenV3.regular_150,
    fontColor: fontColor,
    showBorder: showBorder,
    containerStyle: [style, st[size] ?? st.SMALL, {
      backgroundColor
    }],
    onPressOut: handlePressOut,
    onPressIn: handlePressIn,
    isBorderRounded: isBorderRounded
  }));
};
const Button = /*#__PURE__*/React.memo(ButtonComponent);
export { Button };
const st = StyleSheet.create({
  SMALL: {
    height: 34
  },
  MEDIUM: {
    height: 40
  },
  LARGE: {
    height: 48
  }
});
//# sourceMappingURL=index.js.map