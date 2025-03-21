"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _size = _interopRequireDefault(require("../../theme/size"));
var _text = require("../../typography/text");
var _themeContext = require("../../theme/themeContext");
var _styles = require("../../typography/text/styles");
var _icons = _interopRequireDefault(require("../../icons"));
var _space = _interopRequireDefault(require("../../theme/size/space"));
var _LinkButton = require("../LinkButton");
var _VerticalAnimatedText = _interopRequireDefault(require("./VerticalAnimatedText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BaseTextInput = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    label,
    style,
    borderColor,
    hint,
    inverse = false,
    prefix,
    onPressClear,
    hintColor,
    isMandatory,
    containerStyle,
    textInputStyle,
    closeIconColor,
    showSeparator,
    numberOfLines = 1,
    multiline,
    hintTextVariant = _styles.TextTokenV3.regular_200,
    prefixTextVariant = _styles.TextTokenV3.semibold_250,
    prefixColor = 'defaultDisabled',
    prefixStyle,
    rightActionComponent,
    placeholder,
    onFocus,
    onBlur,
    value,
    textStyle,
    charCount,
    animatedStaticPlaceholderText,
    textInputHeight,
    childTapEnable = true,
    ...restProps
  } = props;
  const innerRef = (0, _react.useRef)(null);
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const [animatePlaceholder, setAnimatePlaceholder] = (0, _react.useState)(true);
  (0, _react.useImperativeHandle)(ref, () => innerRef.current, [innerRef]);
  const st = (0, _react.useMemo)(() => styles(colors), [colors]);
  const isPrefixString = typeof prefix === 'string';
  const hasPrefix = !!prefix;
  const isAnimatedPlaceHolder = Array.isArray(placeholder);
  const _onPressInputTextContainer = (0, _react.useCallback)(() => {
    var _innerRef$current, _innerRef$current2;
    (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || _innerRef$current.blur();
    (_innerRef$current2 = innerRef.current) === null || _innerRef$current2 === void 0 || _innerRef$current2.focus();
  }, []);
  const _getAnimatedPlaceholders = (0, _react.useCallback)(() => {
    return Array.isArray(placeholder) && animatePlaceholder && !(value !== null && value !== void 0 && value.length) ? placeholder : [];
  }, [animatePlaceholder, placeholder, value]);
  const _onFocus = (0, _react.useCallback)(e => {
    setAnimatePlaceholder(false);
    onFocus === null || onFocus === void 0 || onFocus(e);
  }, [onFocus]);
  const _onBlur = (0, _react.useCallback)(e => {
    setAnimatePlaceholder(true);
    onBlur === null || onBlur === void 0 || onBlur(e);
  }, [onBlur]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: containerStyle
  }, !!label && /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: _styles.TextTokenV3.medium_250,
    fontColor: colors.text.defaultPrimary,
    style: st.label
  }, label, isMandatory && /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: _styles.TextTokenV3.medium_250,
    fontColor: colors.text.stateError,
    style: st.label
  }, "*")), /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: _onPressInputTextContainer,
    style: [st.baseStyle, inverse && st.inverseStyle, style, {
      borderColor
    }],
    disabled: !childTapEnable
  }, hasPrefix && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [st.prefix, prefixStyle]
  }, isPrefixString ? /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: prefixTextVariant,
    fontColor: colors.text[prefixColor]
  }, prefix) : prefix, showSeparator && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.separator
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.fullFlex,
    pointerEvents: childTapEnable ? 'auto' : 'none'
  }, isAnimatedPlaceHolder && /*#__PURE__*/_react.default.createElement(_VerticalAnimatedText.default, {
    staticPlaceholderText: animatedStaticPlaceholderText,
    textVariant: textStyle ?? _styles.TextTokenV3.regular_250,
    enabled: animatePlaceholder,
    containerStyle: st.animatedText,
    containerHeight: textInputHeight,
    textArray: _getAnimatedPlaceholders()
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({}, restProps, {
    value: value,
    placeholder: isAnimatedPlaceHolder ? '' : placeholder,
    ref: innerRef,
    cursorColor: '#D1D1D6',
    style: [_styles.TextVariants[_styles.TextTokenV3.regular_250], multiline && st.multiline, textInputStyle,
    // Removed Line Height as it breaks text in IOS
    // https://github.com/facebook/react-native/issues/28012
    st.noLineHeight],
    multiline: multiline,
    numberOfLines: numberOfLines,
    onFocus: _onFocus,
    onBlur: _onBlur
  }))), !!onPressClear && /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: onPressClear,
    disabled: !childTapEnable
  }, /*#__PURE__*/_react.default.createElement(_icons.default.Close, {
    color: closeIconColor,
    fillOpacity: 1
  })), !!rightActionComponent && rightActionComponent.type === _LinkButton.LinkButton && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.rightActionComponent
  }, rightActionComponent)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.footer
  }, !!hint && /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: hintTextVariant,
    fontColor: hintColor,
    style: st.hint
  }, hint), /*#__PURE__*/_react.default.createElement(_reactNative.View, null), !!charCount && !!restProps.maxLength && /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: _styles.TextTokenV3.regular_200,
    fontColor: colors.text.defaultTertiary,
    style: st.hint
  }, `${(value === null || value === void 0 ? void 0 : value.length) ?? 0}/${restProps.maxLength}`)));
});
var _default = exports.default = /*#__PURE__*/_react.default.memo(BaseTextInput);
const styles = colors => _reactNative.StyleSheet.create({
  fullFlex: {
    flex: 1
  },
  label: {
    marginBottom: _size.default.Space.space8
  },
  hint: {
    marginTop: _size.default.Space.space8
  },
  prefix: {
    marginEnd: _size.default.Space.space4,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
  },
  baseStyle: {
    borderWidth: 1.5,
    paddingHorizontal: _size.default.Space.space12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: _size.default.CornerRadius.cornerRadius8,
    backgroundColor: '#181818'
  },
  inverseStyle: {
    backgroundColor: colors.bgFill.defaultInverse
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1
  },
  value: {
    textAlignVertical: 'center',
    marginStart: _size.default.Space.space4
  },
  separator: {
    height: '50%',
    width: 1,
    marginStart: _space.default.space8,
    marginEnd: _space.default.space6,
    backgroundColor: colors.border.defaultPrimary
  },
  multiline: {
    textAlignVertical: 'top',
    alignSelf: 'stretch',
    flexShrink: 1
  },
  rightActionComponent: {
    marginLeft: _space.default.space8
  },
  animatedText: {
    position: 'absolute',
    left: 2,
    top: 0,
    bottom: 0
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  noLineHeight: {
    lineHeight: undefined
  }
});
//# sourceMappingURL=BaseTextInput.js.map