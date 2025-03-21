import React from 'react';
import BaseBadge from '../base/BaseBadge';
import { InfoStripColorEnum, InfoStripTypeEnum } from './types';
import { fetchInfoStripStylingBasedOnProps } from './config';
import { useTheme } from '../../theme/themeContext';
import { TextTokenV3 } from '../../typography/text';
export const InfoStrip = /*#__PURE__*/React.memo(({
  type = InfoStripTypeEnum.card,
  color = InfoStripColorEnum.neutral,
  text,
  icon
}) => {
  const {
    colors
  } = useTheme();
  const baseInfoStripProps = React.useMemo(() => {
    return fetchInfoStripStylingBasedOnProps({
      type,
      colors,
      color
    });
  }, [type, colors, color]);
  return /*#__PURE__*/React.createElement(BaseBadge, {
    text: text,
    icon: icon,
    containerStyle: baseInfoStripProps.containerStyle,
    textVariant: TextTokenV3.regular_200,
    textColor: baseInfoStripProps.textColor
  });
});
//# sourceMappingURL=index.js.map