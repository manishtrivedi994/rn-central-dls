import * as React from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import cornerRadius from '../../theme/size/cornerRadius';
import { useTheme } from '../../theme/themeContext';
import { Text, TextTokenV3 } from '../../typography/text';
import { INDETERMINATE_DURATION, indeterScaleXInterpolation, returnIndeterTransXInterpolation, returnTransXInterpolation, scaleXInterpolation } from './config';
import { ProgressBarEnum } from './types';
const PROGRESS_BAR_HEIGHT = 4;
const BottomLeftRightContent = /*#__PURE__*/React.memo(({
  showProgressPercent,
  st,
  fontColor,
  progressValue,
  progressTimeLeft,
  type
}) => {
  if (type !== ProgressBarEnum.BOTTOM_LEFT_RIGHT) return null;
  return /*#__PURE__*/React.createElement(View, {
    style: st.variantBottomLeftRight
  }, showProgressPercent && /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.regular_150,
    fontColor: fontColor
  }, `${progressValue}%`), progressTimeLeft && /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.regular_150,
    fontColor: fontColor
  }, `${progressTimeLeft} left`));
});
const CenterContent = ({
  fontColor,
  progressValue,
  fontStyle
}) => {
  return /*#__PURE__*/React.createElement(Text, {
    style: fontStyle,
    variant: TextTokenV3.medium_250,
    fontColor: fontColor
  }, `${progressValue}/100`);
};
export const ProgressBar = ({
  isIndetermined = false,
  progressValue = 0,
  isRTL = false,
  animationDuration = 250,
  progressTimeLeft = '',
  showProgressPercent = false,
  type
}) => {
  const {
    colors
  } = useTheme();
  const st = React.useMemo(() => styles(colors), [colors]);
  const progressAnim = React.useRef(new Animated.Value(0)).current;
  const indeterminateAnim = React.useRef(null);
  const [prevWidth, setPrevWidth] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const showBottomCenterContent = type === ProgressBarEnum.BOTTOM_CENTER;
  const showTopCenterContent = type === ProgressBarEnum.TOP_CENTER;
  const startAnimation = React.useCallback(() => {
    if (isIndetermined) {
      if (!indeterminateAnim.current) {
        indeterminateAnim.current = Animated.timing(progressAnim, {
          duration: INDETERMINATE_DURATION,
          toValue: 1,
          useNativeDriver: true,
          isInteraction: false
        });
      }
      progressAnim.setValue(0);
      Animated.loop(indeterminateAnim.current).start();
    } else {
      Animated.timing(progressAnim, {
        duration: animationDuration,
        toValue: progressValue ? progressValue / 100 : 0,
        useNativeDriver: true,
        isInteraction: false,
        easing: Easing.linear
      }).start();
    }
  }, [progressAnim, progressValue, isIndetermined, animationDuration]);
  const stopAnimation = React.useCallback(() => {
    if (indeterminateAnim.current) {
      indeterminateAnim.current.stop();
    }
  }, []);
  React.useEffect(() => {
    if (prevWidth === 0) startAnimation();else stopAnimation();
  }, [startAnimation, stopAnimation, prevWidth]);
  const onLayout = event => {
    setPrevWidth(width);
    setWidth(event.nativeEvent.layout.width);
  };
  const fillStyle = {
    ...st.bar,
    width,
    transform: [{
      translateX: progressAnim.interpolate(isIndetermined ? returnIndeterTransXInterpolation(width, isRTL) : returnTransXInterpolation(width, isRTL))
    }, {
      scaleX: progressAnim.interpolate(isIndetermined ? indeterScaleXInterpolation : scaleXInterpolation)
    }]
  };
  const centerContentFontStyle = showBottomCenterContent ? st.variantBottomCenter : st.variantTopCenter;
  return /*#__PURE__*/React.createElement(View, null, showTopCenterContent && /*#__PURE__*/React.createElement(CenterContent, {
    fontColor: colors.text.defaultPrimary,
    progressValue: progressValue,
    type: type,
    fontStyle: centerContentFontStyle
  }), /*#__PURE__*/React.createElement(View, {
    style: [st.main],
    onLayout: onLayout
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: fillStyle
  })), /*#__PURE__*/React.createElement(BottomLeftRightContent, {
    showProgressPercent: showProgressPercent,
    st: st,
    progressValue: progressValue,
    progressTimeLeft: progressTimeLeft,
    fontColor: colors.text.defaultSecondary,
    type: type
  }), showBottomCenterContent && /*#__PURE__*/React.createElement(CenterContent, {
    fontColor: colors.text.defaultPrimary,
    progressValue: progressValue,
    type: type,
    fontStyle: centerContentFontStyle
  }));
};
const styles = colors => StyleSheet.create({
  main: {
    borderRadius: cornerRadius.cornerRadiusFull,
    backgroundColor: colors.bgFill.accentSecondary,
    overflow: 'hidden',
    height: PROGRESS_BAR_HEIGHT,
    width: '100%'
  },
  bar: {
    flex: 1,
    backgroundColor: colors.bgFill.accent
  },
  variantBottomLeftRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4
  },
  variantBottomCenter: {
    alignSelf: 'center',
    marginTop: 8
  },
  variantTopCenter: {
    alignSelf: 'center',
    marginBottom: 8
  }
});
//# sourceMappingURL=index.js.map