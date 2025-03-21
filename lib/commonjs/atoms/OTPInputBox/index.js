"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OTPInputBox = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _BaseTextInput = _interopRequireDefault(require("../base/BaseTextInput"));
var _themeContext = require("../../theme/themeContext");
var _styles2 = require("../../typography/text/styles");
var _text = require("../../typography/text");
var _rnCentralDls = require("rn-central-dls");
var _config = require("./config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const OTPInputBoxComponent = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  var _refs$current9, _refs$current9$map;
  const {
    maxOTPSize = 4,
    onOTPEnteredCompleted,
    showError,
    hint,
    onChangedText
  } = props;
  const [currentFocusedIndex, setFocusedIndex] = (0, _react.useState)(0);
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const [otp, setOTP] = (0, _react.useState)([]);
  (0, _react.useImperativeHandle)(ref, () => ({
    setOtpValue: _otp => {
      if (_otp.length === 0) {
        return;
      }
      const otpTokens = _otp.split('');
      setOTP(otpTokens.slice(0, maxOTPSize));
    },
    focus: focusCurrent,
    blur: blurCurrent
  }));
  const refs = (0, _react.useRef)(new Array(maxOTPSize).fill(undefined).map(() => /*#__PURE__*/_react.default.createRef()));
  const otpString = (0, _react.useMemo)(() => {
    var _otp$filter;
    return (otp === null || otp === void 0 || (_otp$filter = otp.filter(Boolean)) === null || _otp$filter === void 0 ? void 0 : _otp$filter.join('')) ?? '';
  }, [otp]);
  const focusInput = index => {
    var _refs$current;
    if (index >= 0 && index < (refs === null || refs === void 0 || (_refs$current = refs.current) === null || _refs$current === void 0 ? void 0 : _refs$current.length)) {
      var _refs$current2, _refs$current2$focus, _refs$current3, _refs$current3$clear;
      refs === null || refs === void 0 || (_refs$current2 = refs.current) === null || _refs$current2 === void 0 || (_refs$current2 = _refs$current2[index]) === null || _refs$current2 === void 0 || (_refs$current2 = _refs$current2.current) === null || _refs$current2 === void 0 || (_refs$current2$focus = _refs$current2.focus) === null || _refs$current2$focus === void 0 || _refs$current2$focus.call(_refs$current2);
      refs === null || refs === void 0 || (_refs$current3 = refs.current) === null || _refs$current3 === void 0 || (_refs$current3 = _refs$current3[index]) === null || _refs$current3 === void 0 || (_refs$current3 = _refs$current3.current) === null || _refs$current3 === void 0 || (_refs$current3$clear = _refs$current3.clear) === null || _refs$current3$clear === void 0 || _refs$current3$clear.call(_refs$current3);
      const _otp = [...otp];
      _otp[index] = '';
      setOTP(_otp);
      setFocusedIndex(index);
    }
  };
  const blurInput = index => {
    var _refs$current4;
    if (index >= 0 && index < (refs === null || refs === void 0 || (_refs$current4 = refs.current) === null || _refs$current4 === void 0 ? void 0 : _refs$current4.length)) {
      var _refs$current5, _refs$current5$blur;
      refs === null || refs === void 0 || (_refs$current5 = refs.current) === null || _refs$current5 === void 0 || (_refs$current5 = _refs$current5[index]) === null || _refs$current5 === void 0 || (_refs$current5 = _refs$current5.current) === null || _refs$current5 === void 0 || (_refs$current5$blur = _refs$current5.blur) === null || _refs$current5$blur === void 0 || _refs$current5$blur.call(_refs$current5);
    }
  };

  // Function to handle input change
  const handleInputChange = (index, value) => {
    if (value) {
      if (index < maxOTPSize - 1) {
        focusInput(index + 1); // Move to next input
      } else if (index === maxOTPSize - 1) {
        blurInput(index);
      }
    }
  };
  const focusCurrent = () => {
    var _refs$current6, _refs$current6$focus;
    (_refs$current6 = refs.current) === null || _refs$current6 === void 0 || (_refs$current6 = _refs$current6[currentFocusedIndex]) === null || _refs$current6 === void 0 || (_refs$current6 = _refs$current6.current) === null || _refs$current6 === void 0 || (_refs$current6$focus = _refs$current6.focus) === null || _refs$current6$focus === void 0 || _refs$current6$focus.call(_refs$current6);
  };
  const blurCurrent = () => {
    var _refs$current7, _refs$current7$blur;
    (_refs$current7 = refs.current) === null || _refs$current7 === void 0 || (_refs$current7 = _refs$current7[currentFocusedIndex]) === null || _refs$current7 === void 0 || (_refs$current7 = _refs$current7.current) === null || _refs$current7 === void 0 || (_refs$current7$blur = _refs$current7.blur) === null || _refs$current7$blur === void 0 || _refs$current7$blur.call(_refs$current7);
  };

  // Function to handle backspace press
  const handleBackspacePress = index => {
    if (index > 0) {
      focusInput(index - 1); // Move to previous input
    }
  };
  const _handleClick = () => {
    var _refs$current8;
    /**
     * pointerEvents="none" + TouchableOpacity to avoid touch events in TextInput.
     * to focus only last/next unfilled TextInput
     */
    const filledCount = otpString === null || otpString === void 0 ? void 0 : otpString.length;
    const nextInputToFocus = Math.min(filledCount, maxOTPSize - 1);
    const isLastInputFilled = maxOTPSize === filledCount;
    if (isLastInputFilled) {
      const _otp = [...otp];
      _otp[nextInputToFocus] = '';
      setOTP(_otp);
    }
    /**
     * When keyboard is closed manually input text remains in focus and while
     * clicking to focus it again it doesn't let the keyboard to pop since
     * it is technically focused so blurring first
     */
    if (!_reactNative.Keyboard.isVisible()) {
      blurCurrent();
    }
    refs === null || refs === void 0 || (_refs$current8 = refs.current) === null || _refs$current8 === void 0 || (_refs$current8 = _refs$current8[nextInputToFocus]) === null || _refs$current8 === void 0 || (_refs$current8 = _refs$current8.current) === null || _refs$current8 === void 0 || _refs$current8.focus();
  };
  (0, _react.useEffect)(() => {
    onChangedText === null || onChangedText === void 0 || onChangedText(otpString, otpString.length === maxOTPSize);
  }, [otpString]);
  const styles = (0, _react.useMemo)(() => _styles(), [colors]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: _handleClick,
    style: styles.otpContainer
  }, refs === null || refs === void 0 || (_refs$current9 = refs.current) === null || _refs$current9 === void 0 || (_refs$current9$map = _refs$current9.map) === null || _refs$current9$map === void 0 ? void 0 : _refs$current9$map.call(_refs$current9, (ref, index) => {
    var _refs$current10;
    const showFocused = otp[index] || currentFocusedIndex === index;
    const _onKeyPress = ({
      nativeEvent: {
        key
      }
    }) => {
      if (key === 'Backspace') {
        handleBackspacePress(index);
      }
    };
    const onTextChange = text => {
      // case for iOS, where we allow user to fill otp from suggestion/paste
      // text will be longer then 2
      if ((text === null || text === void 0 ? void 0 : text.length) < 2) {
        handleInputChange(index, text);
      }
      setOTP(prev => {
        const _otp = [...prev];
        if ((text === null || text === void 0 ? void 0 : text.length) < 2) {
          // normal case on android and iOS on user's manual input
          _otp[index] = (text === null || text === void 0 ? void 0 : text[0]) ?? '';
        } else {
          // case for iOS, where we allow user to fill otp from suggestion/paste
          for (let i = 0; i < Math.min(maxOTPSize, text === null || text === void 0 ? void 0 : text.length); i++) {
            _otp[i] = (text === null || text === void 0 ? void 0 : text[i]) ?? '';
          }
        }
        const normalisedOtp = _otp.filter(Boolean);
        const isCompleted = (normalisedOtp === null || normalisedOtp === void 0 ? void 0 : normalisedOtp.length) === maxOTPSize;
        const otpText = normalisedOtp === null || normalisedOtp === void 0 ? void 0 : normalisedOtp.join('');
        if (isCompleted) {
          //reached max
          onOTPEnteredCompleted === null || onOTPEnteredCompleted === void 0 || onOTPEnteredCompleted(otpText);
        }
        return _otp;
      });
    };
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: index,
      pointerEvents: "none",
      style: [styles.boxStyleMainWrapper, index !== (refs === null || refs === void 0 || (_refs$current10 = refs.current) === null || _refs$current10 === void 0 ? void 0 : _refs$current10.length) - 1 && styles.inputContainer]
    }, /*#__PURE__*/_react.default.createElement(_BaseTextInput.default, {
      ref: ref,
      textAlign: "center",
      style: styles.boxStyleWrapper,
      textInputStyle: [styles.boxStyle, styles.textInputColor, _styles2.TextVariants[_styles2.TextTokenV3.semibold_500]],
      autoFocus: index === 0,
      clearTextOnFocus: true,
      placeholderTextColor: '#555555',
      textContentType: "oneTimeCode",
      borderColor: (0, _config.getBorderColor)(!!showFocused, !!showError, colors),
      maxLength: _reactNative.Platform.select({
        android: 1,
        // To avoid flicker in prefilling
        ios: undefined // REQUIRED: iOS maxLength will limit the text value in onChangeText/onChange/onTextInput to 'n' digits and paste of otp will not work
      }),
      keyboardType: "numeric",
      value: (otp === null || otp === void 0 ? void 0 : otp[index]) ?? '',
      onChangeText: onTextChange,
      onKeyPress: _onKeyPress
    }));
  })), !!hint && /*#__PURE__*/_react.default.createElement(_text.Text, {
    fontColor: showError ? colors.text.stateError : colors.text.defaultTertiary,
    variant: _styles2.TextTokenV3.regular_200,
    style: styles.hint
  }, hint));
});
const OTPInputBox = exports.OTPInputBox = /*#__PURE__*/_react.default.memo(OTPInputBoxComponent);
const _styles = () => _reactNative.StyleSheet.create({
  hint: {
    marginTop: _rnCentralDls.Sizes.Space.space4
  },
  otpContainer: {
    flexDirection: 'row',
    width: '100%'
  },
  inputContainer: {
    marginEnd: _rnCentralDls.Sizes.Space.space8
  },
  boxStyleMainWrapper: {
    flex: 1
  },
  boxStyleWrapper: {
    height: 58,
    paddingHorizontal: 14
  },
  boxStyle: {
    height: 58,
    paddingHorizontal: 0,
    flex: 1,
    backgroundColor: '#2C2C2C',
    borderRadius: 8
  },
  textInputColor: {
    color: '#D1D1D6'
  }
});
//# sourceMappingURL=index.js.map