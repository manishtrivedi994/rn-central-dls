function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import size from '../../theme/size';
import useRapidClickHandler from './hooks/useRapidClickHandler';
import BaseLoader from './BaseLoader';
const BaseIconComponent = props => {
  const {
    isLoading = false,
    containerStyle,
    icon = null,
    disabled,
    onPress,
    throttle,
    inverse,
    ...pressableProps
  } = props;
  const {
    onRapidPressHandler
  } = useRapidClickHandler({
    onPress,
    throttle
  });
  if (!icon) {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  return /*#__PURE__*/React.createElement(Pressable, _extends({}, pressableProps, {
    onPress: onRapidPressHandler,
    disabled: disabled || isLoading,
    style: [st.base, containerStyle]
  }), isLoading ? /*#__PURE__*/React.createElement(BaseLoader, {
    isLoading: isLoading,
    containerStyle: st.loader,
    inverse: inverse
  }) : icon);
};
const BaseIconButton = /*#__PURE__*/React.memo(BaseIconComponent);
export { BaseIconButton };
const st = StyleSheet.create({
  base: {
    borderRadius: size.CornerRadius.cornerRadius4,
    padding: size.Space.space4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    position: 'absolute'
  }
});
//# sourceMappingURL=BaseIconButton.js.map