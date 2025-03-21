function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Svgs from '../../../icons';
import { color } from '../../../theme/color';
import size from '../../../theme/size';
const SlideButtonThumb = props => {
  const {
    sliderY,
    sliderPanResponder,
    thumbStyle,
    containerStyle,
    iconColor = color.BASE.icon.defaultPrimary
  } = props;
  return /*#__PURE__*/React.createElement(Animated.View, _extends({
    style: [styles.pressContainer, {
      transform: [{
        translateX: sliderY
      }]
    }, containerStyle]
  }, sliderPanResponder.panHandlers), /*#__PURE__*/React.createElement(View, {
    style: [styles.slider, thumbStyle]
  }, /*#__PURE__*/React.createElement(Svgs.ChevronRightDoubleOutlined, {
    height: size.IconSize.iconSize16,
    width: size.IconSize.iconSize16,
    color: iconColor
  })));
};
export { SlideButtonThumb };
const styles = StyleSheet.create({
  pressContainer: {
    padding: size.Space.space4,
    position: 'absolute',
    zIndex: 1
  },
  slider: {
    backgroundColor: color.BASE.bgFill.defaultPrimary,
    height: size.Size.size32,
    width: size.Size.size32,
    borderRadius: size.CornerRadius.cornerRadius4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
//# sourceMappingURL=SlideButtonThumb.js.map