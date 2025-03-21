import size from '../../theme/size';
import { InfoStripColorEnum, InfoStripTypeEnum } from './types';
export const fetchInfoStripStylingBasedOnProps = ({
  type,
  colors,
  color
}) => {
  const config = {
    [InfoStripColorEnum.info]: {
      backgroundColor: colors.bgFill.accentSecondary
    },
    [InfoStripColorEnum.success]: {
      backgroundColor: colors.bgFill.stateSuccessSecondary
    },
    [InfoStripColorEnum.warning]: {
      backgroundColor: colors.bgFill.stateWarningSecondary
    },
    [InfoStripColorEnum.error]: {
      backgroundColor: colors.bgFill.stateErrorSecondary
    },
    [InfoStripColorEnum.neutral]: {
      backgroundColor: colors.bgFill.defaultSecondary
    }
  };
  let variantFromConfig = config[color];
  if (variantFromConfig === undefined) {
    variantFromConfig = config[InfoStripColorEnum.neutral];
  }
  const cornerStyle = {};
  const infoStripBaseStyle = {
    paddingHorizontal: size.Space.space12,
    paddingVertical: size.Space.space8,
    height: 'auto',
    justifyContent: 'flex-start'
  };
  if (type !== undefined) {
    if (type === InfoStripTypeEnum.card) {
      cornerStyle.borderRadius = size.CornerRadius.cornerRadius12;
    } else if (type === InfoStripTypeEnum.endToEnd) {
      cornerStyle.borderRadius = size.CornerRadius.cornerRadius0;
    }
  }
  return {
    icon: variantFromConfig.icon,
    textColor: colors.text.defaultPrimary,
    containerStyle: {
      backgroundColor: variantFromConfig.backgroundColor,
      ...infoStripBaseStyle,
      ...cornerStyle
    }
  };
};
//# sourceMappingURL=config.js.map