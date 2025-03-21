function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { useTheme } from '../../theme/themeContext';
import { getAlertStyles } from './config';
import BaseAlert from '../base/BaseAlert';
export const Alert = /*#__PURE__*/React.memo(props => {
  const {
    type = 'INFO',
    priority = 'LOW',
    containerStyle,
    ...rest
  } = props;
  const {
    colors
  } = useTheme();
  const baseStyle = React.useMemo(() => {
    return getAlertStyles({
      colors,
      type,
      priority
    });
  }, [colors, type, priority]);
  return /*#__PURE__*/React.createElement(BaseAlert, _extends({}, rest, {
    iconColor: baseStyle.iconColor,
    textColor: baseStyle.textColor,
    containerStyle: [containerStyle, baseStyle]
  }));
});
//# sourceMappingURL=index.js.map