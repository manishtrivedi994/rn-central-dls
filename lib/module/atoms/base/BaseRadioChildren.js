import React, { memo } from 'react';
import { View } from 'react-native';
const BaseRadioChildren = props => {
  const {
    checked = false,
    children,
    outerContainerStyle,
    innerContainerStyle
  } = props;
  return /*#__PURE__*/React.createElement(View, {
    style: outerContainerStyle
  }, checked && !children ? /*#__PURE__*/React.createElement(View, {
    style: innerContainerStyle
  }) : null, children);
};
export default /*#__PURE__*/memo(BaseRadioChildren);
//# sourceMappingURL=BaseRadioChildren.js.map