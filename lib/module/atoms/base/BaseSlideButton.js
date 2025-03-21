import React from 'react';
import { View, StyleSheet } from 'react-native';
import BaseLoader from './BaseLoader';
const BaseSlideButton = props => {
  const {
    isLoading,
    containerStyle,
    children,
    onLayout
  } = props;
  return /*#__PURE__*/React.createElement(View, {
    onLayout: onLayout,
    style: [st.container, containerStyle]
  }, /*#__PURE__*/React.createElement(BaseLoader, {
    containerStyle: st.absolute,
    isLoading: isLoading
  }), !isLoading ? children : null);
};
export { BaseSlideButton };
const st = StyleSheet.create({
  absolute: {
    position: 'absolute',
    alignSelf: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  container: {
    width: '100%'
  }
});
//# sourceMappingURL=BaseSlideButton.js.map