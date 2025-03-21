import { StyleSheet, View, Animated } from 'react-native';
import React, { useMemo } from 'react';
import { useTheme } from '../../theme/themeContext';
import cornerRadius from '../../theme/size/cornerRadius';
import size from '../../theme/size';
const DEFAULT_SLIDER_WIDTH = 48;
const ListIndicator = /*#__PURE__*/React.memo(props => {
  const {
    scrollX,
    sliderWidth = DEFAULT_SLIDER_WIDTH,
    childItemWidth = 4,
    totalItems = 1
  } = props;
  const {
    colors
  } = useTheme();
  const st = useMemo(() => styles(colors), [colors]);
  const {
    parentStyle,
    sliderStyle
  } = useMemo(() => ({
    parentStyle: {
      width: sliderWidth
    },
    sliderStyle: {
      width: sliderWidth / totalItems,
      transform: [{
        translateX: scrollX.interpolate({
          inputRange: [0, childItemWidth * totalItems],
          outputRange: [0, sliderWidth]
        })
      }]
    }
  }), [childItemWidth, sliderWidth, scrollX, totalItems]);
  return /*#__PURE__*/React.createElement(View, {
    style: [parentStyle, st.parent]
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [st.child, sliderStyle]
  }));
});
export { ListIndicator };
const styles = colors => StyleSheet.create({
  parent: {
    height: size.Size.size4,
    backgroundColor: colors.bgFill.accentSecondary,
    borderRadius: cornerRadius.cornerRadius16
  },
  child: {
    position: 'absolute',
    height: size.Size.size4,
    width: size.Size.size8,
    borderRadius: cornerRadius.cornerRadius16,
    backgroundColor: colors.bgFill.accent
  }
});
//# sourceMappingURL=index.js.map