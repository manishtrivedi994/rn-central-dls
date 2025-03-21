"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormTextInput = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _BaseTextInput = _interopRequireDefault(require("../base/BaseTextInput"));
var _themeContext = require("../../theme/themeContext");
var _type = require("./type");
var _config = require("./config");
var _useTextInputFocus = require("../base/hooks/useTextInputFocus");
var _useRapidClickHandler = _interopRequireDefault(require("../base/hooks/useRapidClickHandler"));
var _DisplayUtils = require("../../util/DisplayUtils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FormTextInputComponent = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    placeholder,
    type = _type.TextInputType.TEXT,
    inverse = false,
    onChangeText,
    onPressContainer,
    initialValue,
    maxLength,
    multiline,
    showError,
    disabled,
    rightAction = true,
    throttle,
    value,
    rightActionComponent,
    onPressClear = () => {},
    charCount,
    customPrefixIcon,
    ...rest
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const [inputHeight, setInputHeight] = (0, _react.useState)(_config.HEIGHT);
  const [_value, setValue] = (0, _react.useState)(initialValue);
  const {
    _onBlur,
    _onFocus,
    isFocused
  } = (0, _useTextInputFocus.useTextInputFocus)(props);
  const {
    onRapidPressHandler
  } = (0, _useRapidClickHandler.default)({
    onPress: onPressContainer,
    throttle
  });
  const isMultilineVariant = type === _type.TextInputType.MULTILINE;
  const isInverse = inverse && type === _type.TextInputType.SEARCH_BAR && !disabled;
  const _isAnyMultilineTextInput = multiline || isMultilineVariant;
  (0, _react.useEffect)(() => {
    if (typeof value !== 'undefined') {
      const unformattedText = (unformatter === null || unformatter === void 0 ? void 0 : unformatter(value)) ?? value;
      setValue((formatter === null || formatter === void 0 ? void 0 : formatter(unformattedText)) ?? unformattedText);
    }
  }, [value]);
  const {
    prefix,
    placeholder: _placeholder,
    maxLength: _maxLength,
    showSeparator,
    formatter,
    unformatter,
    checkValidity
  } = (0, _react.useMemo)(() => (0, _config.TEXT_PROP_MAP)({
    colors,
    focused: isFocused,
    inverse: isInverse,
    value: _value
  })[type], [type, colors, _value, isFocused, isInverse]);
  const _onChangeText = (0, _react.useCallback)(text => {
    const unformattedText = (unformatter === null || unformatter === void 0 ? void 0 : unformatter(text)) ?? text;
    setValue((formatter === null || formatter === void 0 ? void 0 : formatter(unformattedText)) ?? unformattedText);
    const isValid = !!(checkValidity !== null && checkValidity !== void 0 && checkValidity(unformattedText));
    onChangeText === null || onChangeText === void 0 || onChangeText(unformattedText, isValid);
  }, [onChangeText, formatter, unformatter, checkValidity]);
  const _onPressClear = (0, _react.useCallback)(() => {
    if (disabled) {
      return;
    }
    setValue('');
    onChangeText === null || onChangeText === void 0 || onChangeText('', false);
    onPressClear();
  }, [onChangeText, onPressClear, disabled]);
  const isToShowError = showError && !disabled;
  const _st = (0, _react.useMemo)(() => st(colors), [colors]);
  const colorConfig = (0, _react.useMemo)(() => (0, _config.getColor)({
    isFocused,
    isErrorState: !!isToShowError,
    colors,
    inverse: isInverse,
    value: _value
  }), [isFocused, isToShowError, colors, isInverse, _value]);
  const handleContentSizeChange = (0, _react.useCallback)(event => {
    const newHeight = Math.min(Math.max(event.nativeEvent.contentSize.height, _config.HEIGHT), _config.MAX_INPUT_HEIGHT);
    setInputHeight(newHeight);
  }, []);
  const inputStyle = (0, _react.useMemo)(() => {
    if (isMultilineVariant) {
      return {
        height: inputHeight,
        maxHeight: _config.MAX_INPUT_HEIGHT
      };
    }
    if (multiline) {
      return _st.multiline;
    }
    return _st.height;
  }, [isMultilineVariant, inputHeight, multiline, _st]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    disabled: !onPressContainer,
    onPress: onRapidPressHandler
  }, /*#__PURE__*/_react.default.createElement(_BaseTextInput.default, _extends({}, rest, {
    onContentSizeChange: isMultilineVariant ? handleContentSizeChange : undefined,
    multiline: _isAnyMultilineTextInput,
    maxLength: _maxLength ?? maxLength,
    ref: ref,
    inverse: isInverse,
    prefix: customPrefixIcon ? customPrefixIcon : prefix,
    style: [inputStyle, disabled && _st.disabledContainer],
    textInputStyle: [_st.textInputStyle, disabled && _st.disabledText, isInverse && _st.inverseTextInputStyle,
    // Added style to align the text to the center
    // Set padding to 0 to fix extra top padding in iOS multiline text
    isMultilineVariant && _st.multilineInput],
    hintColor: isToShowError ? colors.text.stateError : colors.text.defaultTertiary,
    placeholderTextColor: colors.text.defaultTertiary,
    borderColor: colorConfig.border,
    editable: !onPressContainer && !disabled,
    onFocus: _onFocus,
    onBlur: _onBlur,
    value: _value,
    showSeparator: showSeparator,
    placeholder: _placeholder ?? placeholder,
    onChangeText: _onChangeText,
    closeIconColor: colorConfig.icon,
    onPressClear: !multiline && value && rightAction && !rightActionComponent ? _onPressClear : undefined,
    textInputHeight: _config.HEIGHT,
    rightActionComponent: rightActionComponent,
    charCount: charCount && multiline,
    childTapEnable: !onPressContainer
  })));
});
const st = color => _reactNative.StyleSheet.create({
  height: {
    height: _config.HEIGHT
  },
  multiline: {
    height: 80,
    alignItems: 'flex-start'
  },
  textInputStyle: {
    flex: 1,
    color: color.text.defaultPrimary
  },
  inverseTextInputStyle: {
    color: color.text.defaultInverse
  },
  disabledContainer: {
    backgroundColor: color.bgFill.defaultDisabled
  },
  disabledText: {
    color: color.text.defaultDisabled
  },
  multilineInput: {
    flex: 0,
    paddingTop: _DisplayUtils.IS_IOS ? 0 : undefined
  }
});
const FormTextInput = exports.FormTextInput = /*#__PURE__*/_react.default.memo(FormTextInputComponent);
//# sourceMappingURL=index.js.map