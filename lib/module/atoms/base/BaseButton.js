function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Pressable, StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import { Text, TextTokenV3 } from '../../typography/text';
import size from '../../theme/size';
import { useTheme } from '../../theme/themeContext';
import Svgs from '../../icons';
import useRapidClickHandler from './hooks/useRapidClickHandler';
import BaseLoader from './BaseLoader';
const BaseButtonComponent = props => {
  const {
    isLoading = false,
    label,
    title,
    flipCaption = false,
    containerStyle,
    labelVariant,
    textVariant,
    fontColor,
    leftIcon = null,
    rightIcon,
    showBorder,
    iconSpacing = size.Space.space8,
    textStyleContainer,
    labelStyleContainer,
    underline,
    onPress,
    disabled,
    throttle,
    isBorderRounded,
    ...pressableProps
  } = props;
  const {
    colors
  } = useTheme();
  const {
    onRapidPressHandler
  } = useRapidClickHandler({
    onPress,
    throttle
  });
  const {
    iconContainerLeft,
    iconContainerRight
  } = useMemo(() => {
    return {
      iconContainerRight: {
        marginRight: iconSpacing
      },
      iconContainerLeft: {
        marginLeft: iconSpacing
      }
    };
  }, [iconSpacing]);
  return /*#__PURE__*/React.createElement(Pressable, _extends({}, pressableProps, {
    onPress: onRapidPressHandler,
    disabled: disabled || isLoading,
    style: [st.base, showBorder && st.border, containerStyle, showBorder && {
      borderColor: colors.border.defaultPrimary
    }, isBorderRounded && st.borderRounded]
  }), /*#__PURE__*/React.createElement(BaseLoader, {
    isLoading: isLoading,
    containerStyle: st.absolute
  }), /*#__PURE__*/React.createElement(View, {
    style: [st.btnTextContainer, isLoading && st.hidden]
  }, !!leftIcon && /*#__PURE__*/React.createElement(View, {
    style: iconContainerRight
  }, leftIcon), /*#__PURE__*/React.createElement(View, {
    style: [st.btnTextLineWrapper, flipCaption && st.reversed]
  }, !!label && /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    ellipsizeMode: "tail",
    textAlign: "center",
    fontColor: fontColor,
    variant: labelVariant ?? TextTokenV3.regular_150,
    style: labelStyleContainer
  }, label), /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    ellipsizeMode: "tail",
    textAlign: "center",
    fontColor: fontColor,
    variant: textVariant,
    style: textStyleContainer
  }, title), underline && /*#__PURE__*/React.createElement(Svgs.DottedLine, {
    key: title,
    color: fontColor
  })), !!rightIcon && /*#__PURE__*/React.createElement(View, {
    style: iconContainerLeft
  }, rightIcon)));
};
const BaseButton = /*#__PURE__*/React.memo(BaseButtonComponent);
export { BaseButton };
const st = StyleSheet.create({
  border: {
    borderWidth: 1
  },
  absolute: {
    position: 'absolute'
  },
  btnTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 1,
    flexShrink: 1
  },
  btnTextLineWrapper: {
    flexShrink: 1
  },
  base: {
    borderRadius: size.CornerRadius.cornerRadius8,
    alignItems: 'center',
    paddingHorizontal: size.Space.space16,
    flexDirection: 'row',
    justifyContent: 'center',
    flexShrink: 1
  },
  hidden: {
    opacity: 0
  },
  borderRounded: {
    borderRadius: size.CornerRadius.cornerRadiusFull
  },
  reversed: {
    flexDirection: 'column-reverse'
  }
});
//# sourceMappingURL=BaseButton.js.map