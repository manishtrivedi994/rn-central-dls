function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { StyleSheet } from 'react-native';
import React from 'react';
import { BaseIconButton } from '../base/BaseIconButton';
import { DISABLED, VARIANT_STYLE_MAP } from './config';
import cornerRadius from '../../theme/size/cornerRadius';
import useButtonStates from '../base/hooks/useButtonStates';
const IconButtonComponent = props => {
  const {
    style,
    variant = 'SQUARE',
    size = 'MEDIUM',
    type = 'WITH_BG',
    disabled,
    isLoading,
    onPress
  } = props;
  const {
    onPressInHandler,
    onPressOutHandler,
    customStyles = {}
  } = useButtonStates({
    VARIANT_STYLE_MAP: VARIANT_STYLE_MAP,
    DISABLED_STYLE: DISABLED,
    TEXT_VARIANT_MAP: {},
    type,
    disabled,
    isLoading,
    onPress,
    size,
    style
  });
  const {
    backgroundColor
  } = customStyles;
  return /*#__PURE__*/React.createElement(BaseIconButton, _extends({}, props, {
    onPressIn: onPressInHandler,
    onPressOut: onPressOutHandler,
    containerStyle: [st[size], style, {
      backgroundColor
    }, variant === 'ROUND' && st.ROUND_BORDER],
    inverse: type === 'INVERSE'
  }));
};
const IconButton = /*#__PURE__*/React.memo(IconButtonComponent);
export { IconButton };
const st = StyleSheet.create({
  SMALL: {
    height: 24,
    aspectRatio: 1
  },
  MEDIUM: {
    height: 34,
    aspectRatio: 1
  },
  LARGE: {
    height: 40,
    aspectRatio: 1
  },
  ROUND_BORDER: {
    borderRadius: cornerRadius.cornerRadiusFull
  }
});
//# sourceMappingURL=index.js.map