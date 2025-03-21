"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _cornerRadius = _interopRequireDefault(require("../../theme/size/cornerRadius"));
var _themeContext = require("../../theme/themeContext");
var _text = require("../../typography/text");
var _config = require("./config");
var _types = require("./types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PROGRESS_BAR_HEIGHT = 4;
const BottomLeftRightContent = /*#__PURE__*/React.memo(({
  showProgressPercent,
  st,
  fontColor,
  progressValue,
  progressTimeLeft,
  type
}) => {
  if (type !== _types.ProgressBarEnum.BOTTOM_LEFT_RIGHT) return null;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: st.variantBottomLeftRight
  }, showProgressPercent && /*#__PURE__*/React.createElement(_text.Text, {
    variant: _text.TextTokenV3.regular_150,
    fontColor: fontColor
  }, `${progressValue}%`), progressTimeLeft && /*#__PURE__*/React.createElement(_text.Text, {
    variant: _text.TextTokenV3.regular_150,
    fontColor: fontColor
  }, `${progressTimeLeft} left`));
});
const CenterContent = ({
  fontColor,
  progressValue,
  fontStyle
}) => {
  return /*#__PURE__*/React.createElement(_text.Text, {
    style: fontStyle,
    variant: _text.TextTokenV3.medium_250,
    fontColor: fontColor
  }, `${progressValue}/100`);
};
const ProgressBar = ({
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
  } = (0, _themeContext.useTheme)();
  const st = React.useMemo(() => styles(colors), [colors]);
  const progressAnim = React.useRef(new _reactNative.Animated.Value(0)).current;
  const indeterminateAnim = React.useRef(null);
  const [prevWidth, setPrevWidth] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const showBottomCenterContent = type === _types.ProgressBarEnum.BOTTOM_CENTER;
  const showTopCenterContent = type === _types.ProgressBarEnum.TOP_CENTER;
  const startAnimation = React.useCallback(() => {
    if (isIndetermined) {
      if (!indeterminateAnim.current) {
        indeterminateAnim.current = _reactNative.Animated.timing(progressAnim, {
          duration: _config.INDETERMINATE_DURATION,
          toValue: 1,
          useNativeDriver: true,
          isInteraction: false
        });
      }
      progressAnim.setValue(0);
      _reactNative.Animated.loop(indeterminateAnim.current).start();
    } else {
      _reactNative.Animated.timing(progressAnim, {
        duration: animationDuration,
        toValue: progressValue ? progressValue / 100 : 0,
        useNativeDriver: true,
        isInteraction: false,
        easing: _reactNative.Easing.linear
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
      translateX: progressAnim.interpolate(isIndetermined ? (0, _config.returnIndeterTransXInterpolation)(width, isRTL) : (0, _config.returnTransXInterpolation)(width, isRTL))
    }, {
      scaleX: progressAnim.interpolate(isIndetermined ? _config.indeterScaleXInterpolation : _config.scaleXInterpolation)
    }]
  };
  const centerContentFontStyle = showBottomCenterContent ? st.variantBottomCenter : st.variantTopCenter;
  return /*#__PURE__*/React.createElement(_reactNative.View, null, showTopCenterContent && /*#__PURE__*/React.createElement(CenterContent, {
    fontColor: colors.text.defaultPrimary,
    progressValue: progressValue,
    type: type,
    fontStyle: centerContentFontStyle
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [st.main],
    onLayout: onLayout
  }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
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
exports.ProgressBar = ProgressBar;
const styles = colors => _reactNative.StyleSheet.create({
  main: {
    borderRadius: _cornerRadius.default.cornerRadiusFull,
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