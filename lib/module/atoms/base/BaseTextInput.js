function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import size from '../../theme/size';
import { Text } from '../../typography/text';
import { useTheme } from '../../theme/themeContext';
import { TextTokenV3, TextVariants } from '../../typography/text/styles';
import Svgs from '../../icons';
import space from '../../theme/size/space';
import { LinkButton } from '../LinkButton';
import VerticalAnimatedText from './VerticalAnimatedText';
const BaseTextInput = /*#__PURE__*/forwardRef((props, ref) => {
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
    hintTextVariant = TextTokenV3.regular_200,
    prefixTextVariant = TextTokenV3.semibold_250,
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
  const innerRef = useRef(null);
  const {
    colors
  } = useTheme();
  const [animatePlaceholder, setAnimatePlaceholder] = useState(true);
  useImperativeHandle(ref, () => innerRef.current, [innerRef]);
  const st = useMemo(() => styles(colors), [colors]);
  const isPrefixString = typeof prefix === 'string';
  const hasPrefix = !!prefix;
  const isAnimatedPlaceHolder = Array.isArray(placeholder);
  const _onPressInputTextContainer = useCallback(() => {
    var _innerRef$current, _innerRef$current2;
    (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || _innerRef$current.blur();
    (_innerRef$current2 = innerRef.current) === null || _innerRef$current2 === void 0 || _innerRef$current2.focus();
  }, []);
  const _getAnimatedPlaceholders = useCallback(() => {
    return Array.isArray(placeholder) && animatePlaceholder && !(value !== null && value !== void 0 && value.length) ? placeholder : [];
  }, [animatePlaceholder, placeholder, value]);
  const _onFocus = useCallback(e => {
    setAnimatePlaceholder(false);
    onFocus === null || onFocus === void 0 || onFocus(e);
  }, [onFocus]);
  const _onBlur = useCallback(e => {
    setAnimatePlaceholder(true);
    onBlur === null || onBlur === void 0 || onBlur(e);
  }, [onBlur]);
  return /*#__PURE__*/React.createElement(View, {
    style: containerStyle
  }, !!label && /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.medium_250,
    fontColor: colors.text.defaultPrimary,
    style: st.label
  }, label, isMandatory && /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.medium_250,
    fontColor: colors.text.stateError,
    style: st.label
  }, "*")), /*#__PURE__*/React.createElement(Pressable, {
    onPress: _onPressInputTextContainer,
    style: [st.baseStyle, inverse && st.inverseStyle, style, {
      borderColor
    }],
    disabled: !childTapEnable
  }, hasPrefix && /*#__PURE__*/React.createElement(View, {
    style: [st.prefix, prefixStyle]
  }, isPrefixString ? /*#__PURE__*/React.createElement(Text, {
    variant: prefixTextVariant,
    fontColor: colors.text[prefixColor]
  }, prefix) : prefix, showSeparator && /*#__PURE__*/React.createElement(View, {
    style: st.separator
  })), /*#__PURE__*/React.createElement(View, {
    style: st.fullFlex,
    pointerEvents: childTapEnable ? 'auto' : 'none'
  }, isAnimatedPlaceHolder && /*#__PURE__*/React.createElement(VerticalAnimatedText, {
    staticPlaceholderText: animatedStaticPlaceholderText,
    textVariant: textStyle ?? TextTokenV3.regular_250,
    enabled: animatePlaceholder,
    containerStyle: st.animatedText,
    containerHeight: textInputHeight,
    textArray: _getAnimatedPlaceholders()
  }), /*#__PURE__*/React.createElement(TextInput, _extends({}, restProps, {
    value: value,
    placeholder: isAnimatedPlaceHolder ? '' : placeholder,
    ref: innerRef,
    cursorColor: '#D1D1D6',
    style: [TextVariants[TextTokenV3.regular_250], multiline && st.multiline, textInputStyle,
    // Removed Line Height as it breaks text in IOS
    // https://github.com/facebook/react-native/issues/28012
    st.noLineHeight],
    multiline: multiline,
    numberOfLines: numberOfLines,
    onFocus: _onFocus,
    onBlur: _onBlur
  }))), !!onPressClear && /*#__PURE__*/React.createElement(Pressable, {
    onPress: onPressClear,
    disabled: !childTapEnable
  }, /*#__PURE__*/React.createElement(Svgs.Close, {
    color: closeIconColor,
    fillOpacity: 1
  })), !!rightActionComponent && rightActionComponent.type === LinkButton && /*#__PURE__*/React.createElement(View, {
    style: st.rightActionComponent
  }, rightActionComponent)), /*#__PURE__*/React.createElement(View, {
    style: st.footer
  }, !!hint && /*#__PURE__*/React.createElement(Text, {
    variant: hintTextVariant,
    fontColor: hintColor,
    style: st.hint
  }, hint), /*#__PURE__*/React.createElement(View, null), !!charCount && !!restProps.maxLength && /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.regular_200,
    fontColor: colors.text.defaultTertiary,
    style: st.hint
  }, `${(value === null || value === void 0 ? void 0 : value.length) ?? 0}/${restProps.maxLength}`)));
});
export default /*#__PURE__*/React.memo(BaseTextInput);
const styles = colors => StyleSheet.create({
  fullFlex: {
    flex: 1
  },
  label: {
    marginBottom: size.Space.space8
  },
  hint: {
    marginTop: size.Space.space8
  },
  prefix: {
    marginEnd: size.Space.space4,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
  },
  baseStyle: {
    borderWidth: 1.5,
    paddingHorizontal: size.Space.space12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: size.CornerRadius.cornerRadius8,
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
    marginStart: size.Space.space4
  },
  separator: {
    height: '50%',
    width: 1,
    marginStart: space.space8,
    marginEnd: space.space6,
    backgroundColor: colors.border.defaultPrimary
  },
  multiline: {
    textAlignVertical: 'top',
    alignSelf: 'stretch',
    flexShrink: 1
  },
  rightActionComponent: {
    marginLeft: space.space8
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