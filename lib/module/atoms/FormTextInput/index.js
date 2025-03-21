function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { StyleSheet, Pressable } from 'react-native';
import React, { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import BaseTextInput from '../base/BaseTextInput';
import { useTheme } from '../../theme/themeContext';
import { TextInputType } from './type';
import { HEIGHT, MAX_INPUT_HEIGHT, TEXT_PROP_MAP, getColor } from './config';
import { useTextInputFocus } from '../base/hooks/useTextInputFocus';
import useRapidClickHandler from '../base/hooks/useRapidClickHandler';
import { IS_IOS } from '../../util/DisplayUtils';
const FormTextInputComponent = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    placeholder,
    type = TextInputType.TEXT,
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
  } = useTheme();
  const [inputHeight, setInputHeight] = useState(HEIGHT);
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
  const isMultilineVariant = type === TextInputType.MULTILINE;
  const isInverse = inverse && type === TextInputType.SEARCH_BAR && !disabled;
  const _isAnyMultilineTextInput = multiline || isMultilineVariant;
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
  } = useMemo(() => TEXT_PROP_MAP({
    colors,
    focused: isFocused,
    inverse: isInverse,
    value: _value
  })[type], [type, colors, _value, isFocused, isInverse]);
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
  }, [onChangeText, onPressClear, disabled]);
  const isToShowError = showError && !disabled;
  const _st = useMemo(() => st(colors), [colors]);
  const colorConfig = useMemo(() => getColor({
    isFocused,
    isErrorState: !!isToShowError,
    colors,
    inverse: isInverse,
    value: _value
  }), [isFocused, isToShowError, colors, isInverse, _value]);
  const handleContentSizeChange = useCallback(event => {
    const newHeight = Math.min(Math.max(event.nativeEvent.contentSize.height, HEIGHT), MAX_INPUT_HEIGHT);
    setInputHeight(newHeight);
  }, []);
  const inputStyle = useMemo(() => {
    if (isMultilineVariant) {
      return {
        height: inputHeight,
        maxHeight: MAX_INPUT_HEIGHT
      };
    }
    if (multiline) {
      return _st.multiline;
    }
    return _st.height;
  }, [isMultilineVariant, inputHeight, multiline, _st]);
  return /*#__PURE__*/React.createElement(Pressable, {
    disabled: !onPressContainer,
    onPress: onRapidPressHandler
  }, /*#__PURE__*/React.createElement(BaseTextInput, _extends({}, rest, {
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
    textInputHeight: HEIGHT,
    rightActionComponent: rightActionComponent,
    charCount: charCount && multiline,
    childTapEnable: !onPressContainer
  })));
});
const st = color => StyleSheet.create({
  height: {
    height: HEIGHT
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
    paddingTop: IS_IOS ? 0 : undefined
  }
});
export const FormTextInput = /*#__PURE__*/React.memo(FormTextInputComponent);
//# sourceMappingURL=index.js.map