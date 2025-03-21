function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useMemo } from 'react';
import { Text as NativeText } from 'react-native';
import { TextToken, TextTokenV3, getTextVariants } from './styles';
const defaultProps = {
  multiline: false,
  children: null,
  style: null,
  textAlign: 'left',
  italic: false
};
const TextComponent = props => {
  const {
    style,
    children,
    fontColor,
    variant,
    textAlign,
    italic = false,
    ...restProps
  } = props;
  const defaultStyle = useMemo(() => {
    var _getTextVariants;
    return (_getTextVariants = getTextVariants({
      italic
    })) === null || _getTextVariants === void 0 ? void 0 : _getTextVariants[variant];
  }, [italic, variant]);
  const mergedStyle = [defaultStyle, style, {
    color: fontColor
  }, !!textAlign && {
    textAlign
  }];
  return /*#__PURE__*/React.createElement(NativeText, _extends({}, restProps, {
    style: mergedStyle
  }), children);
};
TextComponent.defaultProps = defaultProps;
const Text = /*#__PURE__*/React.memo(TextComponent);
export { Text, TextToken, TextTokenV3 };
//# sourceMappingURL=index.js.map