function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Svgs from '../../icons';
import size from '../../theme/size';
import { Text, TextToken } from '../../typography/text';
import { Tags } from '../Tags';
import { AppearanceEnum } from '../Tags/types';
const BaseChip = props => {
  const {
    onPress,
    leftIcon,
    containerStyle,
    labelColor,
    label,
    rightIcon,
    withBadge,
    withCross,
    disabled,
    tagsProps,
    subLabel
  } = props ?? {};
  const showLeftIcon = !!leftIcon && !withBadge;
  const showRightIcon = !!rightIcon && !withCross;
  const renderIcon = icon => {
    if (!icon) return null;
    return /*#__PURE__*/React.cloneElement(icon, {
      color: labelColor
    });
  };
  return /*#__PURE__*/React.createElement(Pressable, {
    disabled: disabled,
    onPress: onPress,
    style: [st.main, containerStyle]
  }, /*#__PURE__*/React.createElement(View, {
    style: st.content
  }, withBadge && /*#__PURE__*/React.createElement(Tags, _extends({
    appearance: AppearanceEnum.PRIMARY,
    label: 0
  }, tagsProps, {
    style: st.badgeMargin
  })), showLeftIcon && /*#__PURE__*/React.createElement(View, {
    style: st.leftIcon
  }, renderIcon(leftIcon)), /*#__PURE__*/React.createElement(Text, {
    variant: TextToken.label4_medium,
    fontColor: labelColor
  }, label), showRightIcon && /*#__PURE__*/React.createElement(View, {
    style: st.rightIcon
  }, renderIcon(rightIcon)), withCross && /*#__PURE__*/React.createElement(Svgs.Close, {
    style: st.rightIcon,
    color: labelColor
  })), !!subLabel && /*#__PURE__*/React.createElement(Text, {
    style: st.subLabelStyle
    // To be updated in DLS
    ,
    variant: TextToken.label3_medium,
    fontColor: labelColor
  }, subLabel));
};
const st = StyleSheet.create({
  main: {
    paddingHorizontal: size.Space.space10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftIcon: {
    marginRight: size.Space.space4,
    width: size.Size.size16,
    height: size.Size.size16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightIcon: {
    marginLeft: size.Space.space4,
    width: size.Size.size16,
    height: size.Size.size16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeMargin: {
    marginRight: size.Space.space4
  },
  subLabelStyle: {
    marginTop: size.Space.space8
  }
});
export default BaseChip;
//# sourceMappingURL=BaseChip.js.map