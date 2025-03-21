function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import BaseChip from '../base/BaseChip';
import { useTheme } from '../../theme/themeContext';
import { StyleSheet } from 'react-native';
import { getStyles } from './config';
import size from '../../theme/size';
const DATE_HEIGHT = 70;
const DATE_WIDTH = 73;
const DateTimeSlotComponent = props => {
  const {
    colors
  } = useTheme();
  const {
    type = 'TIME',
    disabled = false,
    selected = false,
    customStyle = {}
  } = props;
  const baseStyles = React.useMemo(() => {
    return getStyles({
      colors,
      disabled,
      selected
    });
  }, [colors, disabled, selected]);
  return /*#__PURE__*/React.createElement(BaseChip, _extends({}, props, {
    labelColor: baseStyles.labelColor,
    containerStyle: [st.baseStyle, baseStyles, st[type], customStyle]
  }));
};
const st = StyleSheet.create({
  baseStyle: {
    borderWidth: 1,
    borderRadius: size.CornerRadius.cornerRadius8
  },
  DATE: {
    flexDirection: 'column',
    height: DATE_HEIGHT,
    width: DATE_WIDTH
  },
  TIME: {
    height: size.Size.size34
  }
});
const DateTimeSlot = /*#__PURE__*/React.memo(DateTimeSlotComponent);
export { DateTimeSlot };
//# sourceMappingURL=index.js.map