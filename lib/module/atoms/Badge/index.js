import React from 'react';
import BaseBadge from '../base/BaseBadge';
import { fetchBadgeStylingBasedOnProps } from './config';
import { useTheme } from '../../theme/themeContext';
export const Badge = /*#__PURE__*/React.memo(({
  type = 'dark',
  variant = 'grey',
  state = 'active',
  text,
  icon,
  corner,
  border = false,
  textState
}) => {
  const {
    colors
  } = useTheme();
  const baseBadgeProps = React.useMemo(() => {
    return fetchBadgeStylingBasedOnProps({
      type,
      variant,
      state,
      colors,
      corner,
      border,
      textState
    });
  }, [type, variant, state, colors, corner, border, textState]);
  return /*#__PURE__*/React.createElement(BaseBadge, {
    text: text,
    icon: icon,
    containerStyle: baseBadgeProps.containerStyle,
    textColor: baseBadgeProps.textColor,
    textVariant: baseBadgeProps.textVariant
  });
});
//# sourceMappingURL=index.js.map