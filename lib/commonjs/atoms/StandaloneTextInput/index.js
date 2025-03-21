"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandaloneTextInput = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _BaseTextInput = _interopRequireDefault(require("../base/BaseTextInput"));
var _themeContext = require("../../theme/themeContext");
var _type = require("./type");
var _useTextInputFocus = require("../base/hooks/useTextInputFocus");
var _useRapidClickHandler = _interopRequireDefault(require("../base/hooks/useRapidClickHandler"));
var _styles = require("../../typography/text/styles");
var _size = _interopRequireDefault(require("../../theme/size"));
var _config = require("../FormTextInput/config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const StandaloneTextInputComponent = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    placeholder,
    type = _type.StandaloneTextInputType.TEXT,
    onChangeText,
    onPressContainer,
    initialValue,
    maxLength,
    showError,
    disabled,
    rightAction = true,
    throttle,
    value,
    rightActionComponent,
    onPressClear = () => {},
    ...rest
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
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
  } = (0, _react.useMemo)(() => (0, _config.TEXT_PROP_MAP_STANDALONE)()[type], [type, colors]);
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
  }, [onChangeText, disabled, onPressClear]);
  const isToShowError = showError && !disabled;
  const isVehicleInput = type === _type.StandaloneTextInputType.VEHICLE_NO;
  const _st = (0, _react.useMemo)(() => st(colors), [colors]);
  const colorConfig = (0, _react.useMemo)(() => (0, _config.getColor)({
    isFocused,
    isErrorState: !!isToShowError,
    colors,
    inverse: false,
    value: _value
  }), [isFocused, isToShowError, colors, _value]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    disabled: !onPressContainer,
    onPress: onRapidPressHandler
  }, /*#__PURE__*/_react.default.createElement(_BaseTextInput.default, _extends({}, rest, {
    textStyle: _styles.TextToken.heading4_semibold,
    maxLength: _maxLength ?? maxLength,
    ref: ref,
    inverse: true,
    prefix: prefix,
    style: [_st.inputWrapper, disabled && _st.disabledInputWrapper],
    textInputStyle: [_st.textInputStyle, disabled && _st.disabledTextInputStyle, _styles.TextVariants[_styles.TextTokenV3.semibold_500]],
    hintColor: isToShowError ? colors.text.stateError : colors.text.defaultTertiary,
    placeholderTextColor: '#555555'
    // borderColor={colorConfig.border}
    ,
    editable: !disabled,
    onFocus: _onFocus,
    onBlur: _onBlur,
    value: _value,
    showSeparator: showSeparator,
    placeholder: _placeholder ?? placeholder,
    onChangeText: _onChangeText,
    closeIconColor: colorConfig.icon,
    onPressClear: value && rightAction && !rightActionComponent ? _onPressClear : undefined,
    hintTextVariant: _styles.TextTokenV3.regular_200,
    prefixTextVariant: _styles.TextTokenV3.semibold_250,
    prefixStyle: [_st.prefixContainer, isVehicleInput && _st.prefixVehicleContainer],
    prefixColor: disabled ? 'defaultDisabled' : 'defaultPrimary',
    rightActionComponent: rightActionComponent,
    childTapEnable: !onPressContainer
  })));
});
const st = color => _reactNative.StyleSheet.create({
  disabledInputWrapper: {
    backgroundColor: color.bgFill.defaultDisabled
  },
  inputWrapper: {
    height: 58,
    paddingLeft: _size.default.Space.space0,
    borderWidth: _size.default.Space.space2,
    overflow: 'hidden'
  },
  multiline: {
    minHeight: 80,
    alignItems: 'flex-start'
  },
  disabledTextInputStyle: {
    color: color.text.defaultDisabled
  },
  textInputStyle: {
    flex: 1,
    color: '#D1D1D6',
    paddingHorizontal: _size.default.Space.space8
  },
  prefixVehicleContainer: {
    backgroundColor: color.bgFill.accent
  },
  prefixContainer: {
    paddingHorizontal: _size.default.Space.space12,
    backgroundColor: '#2C2C2C'
  }
});
const StandaloneTextInput = exports.StandaloneTextInput = /*#__PURE__*/_react.default.memo(StandaloneTextInputComponent);
//# sourceMappingURL=index.js.map