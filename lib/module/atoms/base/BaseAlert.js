import React from 'react';
import { StyleSheet, View } from 'react-native';
import size from '../../theme/size';
import { Text, TextTokenV3 } from '../../typography/text';
import Svgs from '../../icons';
import { IconButton } from '../IconButton';
const BaseAlert = props => {
  const {
    containerStyle,
    textColor,
    iconColor,
    title,
    desc,
    leftIcon,
    rightIcon,
    showCross,
    onPress
  } = props;
  const renderIcon = icon => {
    if (!icon) return null;
    return /*#__PURE__*/React.cloneElement(icon, {
      color: iconColor
    });
  };
  const getRightMostIcon = () => {
    return rightIcon ? renderIcon(rightIcon) : showCross && /*#__PURE__*/React.createElement(Svgs.Close, {
      style: styles.rightIcon,
      color: iconColor
    });
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.main, containerStyle]
  }, !!leftIcon && /*#__PURE__*/React.createElement(View, {
    style: styles.leftIcon
  }, renderIcon(leftIcon)), /*#__PURE__*/React.createElement(View, {
    style: styles.flex
  }, /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.medium_250,
    numberOfLines: 1,
    fontColor: textColor
  }, title), !!desc && /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.regular_250,
    style: styles.descText,
    fontColor: textColor
  }, desc)), (showCross || !!rightIcon) && /*#__PURE__*/React.createElement(IconButton, {
    type: "WITHOUT_BG",
    size: "SMALL",
    variant: "SQUARE",
    onPress: onPress,
    icon: getRightMostIcon() || /*#__PURE__*/React.createElement(React.Fragment, null)
  }));
};
export default BaseAlert;
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  main: {
    padding: size.Space.space12,
    borderRadius: size.CornerRadius.cornerRadius8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftIcon: {
    marginRight: size.Space.space10,
    width: size.IconSize.iconSize20,
    height: size.IconSize.iconSize20,
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
  descText: {
    flex: 1,
    marginTop: size.Space.space4
  }
});
//# sourceMappingURL=BaseAlert.js.map