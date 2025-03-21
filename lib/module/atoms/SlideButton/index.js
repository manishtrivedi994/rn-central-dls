import React from 'react';
import { StyleSheet } from 'react-native';
import { DISABLED, VARIANT_STYLE_MAP, SIZE_VARIANT_MAP } from './config';
import { BaseSlideButton } from '../base/BaseSlideButton';
import Size from '../../theme/size';
import useButtonStates from '../base/hooks/useButtonStates';
import { SlideButtonText } from './components/SlideButtonText';
import { SlideButtonThumb } from './components/SlideButtonThumb';
import { useAnimatedSlideButton } from './hooks/useAnimatedSlideButton';
const SlideButtonComponent = ({
  onSwipeEnd,
  title = '',
  size = 'MEDIUM',
  isLoading = false,
  disabled = false,
  variant = 'NORMAL',
  onSwipeStart = () => {}
}) => {
  const {
    customStyles = {},
    textVariant: sizeVariant,
    onPressInHandler,
    onPressOutHandler
  } = useButtonStates({
    VARIANT_STYLE_MAP,
    TEXT_VARIANT_MAP: SIZE_VARIANT_MAP,
    DISABLED_STYLE: DISABLED,
    type: variant,
    disabled,
    isLoading,
    size
  });
  const {
    containerStyle,
    textStyle,
    thumbIconStyle,
    thumbStyle
  } = customStyles;
  const {
    fontColor
  } = textStyle;
  const {
    textStyle: {
      variant: textVariant
    },
    thumbStyle: thumbSizeStyle
  } = sizeVariant;
  const {
    color: iconColor
  } = thumbIconStyle;
  const sliderSize = thumbSizeStyle.width;
  const {
    sliderPanResponder,
    sliderY,
    interpolatedTextOpacity,
    handleLayout
  } = useAnimatedSlideButton({
    sliderSize,
    onSwipeEnd,
    disabled,
    onPressIn: onPressInHandler,
    onPressOut: onPressOutHandler,
    onSwipeStart
  });
  return /*#__PURE__*/React.createElement(BaseSlideButton, {
    containerStyle: [st[size], containerStyle],
    isLoading: isLoading,
    onLayout: handleLayout
  }, /*#__PURE__*/React.createElement(SlideButtonText, {
    textVariant: textVariant,
    fontColor: fontColor,
    title: title,
    containerStyle: {
      opacity: interpolatedTextOpacity
    }
  }), /*#__PURE__*/React.createElement(SlideButtonThumb, {
    sliderY: sliderY,
    sliderPanResponder: sliderPanResponder,
    thumbStyle: [thumbSizeStyle, thumbStyle],
    iconColor: iconColor
  }));
};
const SlideButton = /*#__PURE__*/React.memo(SlideButtonComponent);
export { SlideButton };
const st = StyleSheet.create({
  MEDIUM: {
    height: Size.Size.size40,
    borderRadius: Size.CornerRadius.cornerRadius8
  },
  LARGE: {
    height: Size.Size.size48,
    borderRadius: Size.CornerRadius.cornerRadius8
  }
});
//# sourceMappingURL=index.js.map