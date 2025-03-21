function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet } from 'react-native';
import size from '../../theme/size';
import { useTheme } from '../../theme/themeContext';
import BaseChip from '../base/BaseChip';
import { getStyles } from './config';
const ChipComponent = props => {
  const {
    style = {},
    size: chipSize = 'SMALL',
    disabled = false,
    selected = false,
    type = 'SQUARE'
  } = props;
  const {
    colors
  } = useTheme();
  const baseStyles = React.useMemo(() => {
    return getStyles({
      colors,
      disabled,
      selected
    });
  }, [colors, disabled, selected]);
  return /*#__PURE__*/React.createElement(BaseChip, _extends({}, props, {
    containerStyle: [style, baseStyles, st[chipSize], st[type]],
    labelColor: baseStyles.labelColor
  }));
};
const Chip = /*#__PURE__*/React.memo(ChipComponent);
export { Chip };
const st = StyleSheet.create({
  SMALL: {
    height: size.Size.size28
  },
  MEDIUM: {
    height: size.Size.size38
  },
  SQUARE: {
    borderRadius: size.CornerRadius.cornerRadius8
  },
  ROUNDED: {
    borderRadius: size.CornerRadius.cornerRadiusFull
  }
});
//# sourceMappingURL=index.js.map