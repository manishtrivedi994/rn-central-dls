function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { useTheme } from '../../theme/themeContext';
import BaseRating from '../base/BaseRating';
import { getStyles } from './config';
import { SizeEnum } from './types';
const RatingComponent = props => {
  const {
    size = 'SMALL',
    disabled,
    ...rest
  } = props;
  const {
    colors
  } = useTheme();
  const {
    color,
    activeColor
  } = React.useMemo(() => {
    return getStyles({
      colors,
      disabled
    });
  }, [colors, disabled]);
  return /*#__PURE__*/React.createElement(BaseRating, _extends({
    size: SizeEnum[size],
    color: color,
    activeColor: activeColor,
    disabled: disabled
  }, rest));
};
const Rating = /*#__PURE__*/React.memo(RatingComponent);
export { Rating };
//# sourceMappingURL=index.js.map