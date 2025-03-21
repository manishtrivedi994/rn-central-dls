function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { StyleSheet, Pressable } from 'react-native';
import React, { forwardRef, useCallback, useMemo, useState, useEffect } from 'react';
import BaseTextInput from '../base/BaseTextInput';
import { useTheme } from '../../theme/themeContext';
import { StandaloneTextInputType } from './type';
import { useTextInputFocus } from '../base/hooks/useTextInputFocus';
import useRapidClickHandler from '../base/hooks/useRapidClickHandler';
import { TextToken, TextTokenV3, TextVariants } from '../../typography/text/styles';
import size from '../../theme/size';
import { TEXT_PROP_MAP_STANDALONE, getColor } from '../FormTextInput/config';
const StandaloneTextInputComponent = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    placeholder,
    type = StandaloneTextInputType.TEXT,
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
  } = useTheme();
  const [_value, setValue] = useState(initialValue);
  const {
    _onBlur,
    _onFocus,
    isFocused
  } = useTextInputFocus(props);
  const {
    onRapidPressHandler
  } = useRapidClickHandler({
    onPress: onPressContainer,
    throttle
  });
  useEffect(() => {
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
  } = useMemo(() => TEXT_PROP_MAP_STANDALONE(colors)[type], [type, colors]);
  const _onChangeText = useCallback(text => {
    const unformattedText = (unformatter === null || unformatter === void 0 ? void 0 : unformatter(text)) ?? text;
    setValue((formatter === null || formatter === void 0 ? void 0 : formatter(unformattedText)) ?? unformattedText);
    const isValid = !!(checkValidity !== null && checkValidity !== void 0 && checkValidity(unformattedText));
    onChangeText === null || onChangeText === void 0 || onChangeText(unformattedText, isValid);
  }, [onChangeText, formatter, unformatter, checkValidity]);
  const _onPressClear = useCallback(() => {
    if (disabled) {
      return;
    }
    setValue('');
    onChangeText === null || onChangeText === void 0 || onChangeText('', false);
    onPressClear();
  }, [onChangeText, disabled, onPressClear]);
  const isToShowError = showError && !disabled;
  const isVehicleInput = type === StandaloneTextInputType.VEHICLE_NO;
  const _st = useMemo(() => st(colors), [colors]);
  const colorConfig = useMemo(() => getColor({
    isFocused,
    isErrorState: !!isToShowError,
    colors,
    inverse: false,
    value: _value
  }), [isFocused, isToShowError, colors, _value]);
  return /*#__PURE__*/React.createElement(Pressable, {
    disabled: !onPressContainer,
    onPress: onRapidPressHandler
  }, /*#__PURE__*/React.createElement(BaseTextInput, _extends({}, rest, {
    textStyle: TextToken.heading4_semibold,
    maxLength: _maxLength ?? maxLength,
    ref: ref,
    inverse: false,
    prefix: prefix,
    style: [_st.inputWrapper, disabled && _st.disabledInputWrapper],
    textInputStyle: [_st.textInputStyle, disabled && _st.disabledTextInputStyle, TextVariants[TextTokenV3.semibold_500]],
    hintColor: isToShowError ? colors.text.stateError : colors.text.defaultTertiary,
    placeholderTextColor: colors.text.defaultTertiary,
    borderColor: colorConfig.border,
    editable: !disabled,
    onFocus: _onFocus,
    onBlur: _onBlur,
    value: _value,
    showSeparator: showSeparator,
    placeholder: _placeholder ?? placeholder,
    onChangeText: _onChangeText,
    closeIconColor: colorConfig.icon,
    onPressClear: value && rightAction && !rightActionComponent ? _onPressClear : undefined,
    hintTextVariant: TextTokenV3.regular_200,
    prefixTextVariant: TextTokenV3.semibold_250,
    prefixStyle: [_st.prefixContainer, isVehicleInput && _st.prefixVehicleContainer],
    prefixColor: disabled ? 'defaultDisabled' : 'defaultPrimary',
    rightActionComponent: rightActionComponent,
    childTapEnable: !onPressContainer
  })));
});
const st = color => StyleSheet.create({
  disabledInputWrapper: {
    backgroundColor: color.bgFill.defaultDisabled
  },
  inputWrapper: {
    height: 58,
    paddingLeft: size.Space.space0,
    borderWidth: size.Space.space2,
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
    color: color.text.defaultPrimary,
    paddingHorizontal: size.Space.space8
  },
  prefixVehicleContainer: {
    backgroundColor: color.bgFill.accent
  },
  prefixContainer: {
    paddingHorizontal: size.Space.space12,
    backgroundColor: color.bgFill.defaultSecondary
  }
});
export const StandaloneTextInput = /*#__PURE__*/React.memo(StandaloneTextInputComponent);
//# sourceMappingURL=index.js.map