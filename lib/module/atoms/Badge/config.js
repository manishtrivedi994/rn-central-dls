import size from '../../theme/size';
import { TextToken } from '../../typography/text';
export let BadgeVariantsEnum = /*#__PURE__*/function (BadgeVariantsEnum) {
  BadgeVariantsEnum["grey"] = "grey";
  BadgeVariantsEnum["success"] = "success";
  BadgeVariantsEnum["accent"] = "accent";
  BadgeVariantsEnum["warning"] = "warning";
  BadgeVariantsEnum["error"] = "error";
  BadgeVariantsEnum["purple"] = "purple";
  BadgeVariantsEnum["magenta"] = "magenta";
  BadgeVariantsEnum["crimson"] = "crimson";
  BadgeVariantsEnum["neutral"] = "neutral";
  return BadgeVariantsEnum;
}({});
export const fetchBadgeStylingBasedOnProps = ({
  type,
  variant,
  state,
  colors,
  corner,
  border,
  textState
}) => {
  const DARK_CONFIG = {
    [BadgeVariantsEnum.grey]: {
      backgroundColor: colors.bgFill.defaultInverse,
      textColor: colors.text.defaultInverse,
      borderColor: colors.border.defaultInverse
    },
    [BadgeVariantsEnum.success]: {
      backgroundColor: colors.bgFill.stateSuccess,
      textColor: colors.text.stateSuccessInverse,
      borderColor: colors.border.stateSuccess
    },
    [BadgeVariantsEnum.warning]: {
      backgroundColor: colors.bgFill.stateWarning,
      textColor: colors.text.defaultPrimary,
      borderColor: colors.border.stateWarning
    },
    [BadgeVariantsEnum.error]: {
      backgroundColor: colors.bgFill.stateError,
      textColor: colors.text.stateErrorInverse,
      borderColor: colors.border.stateError
    },
    [BadgeVariantsEnum.purple]: {
      backgroundColor: colors.bgFill.miscPurple,
      textColor: colors.text.miscPurpleInverse,
      borderColor: colors.border.miscPurple
    },
    [BadgeVariantsEnum.accent]: {
      backgroundColor: colors.bgFill.accent,
      textColor: colors.text.brandAccentInverse,
      borderColor: colors.border.defaultAccent
    },
    [BadgeVariantsEnum.magenta]: {
      backgroundColor: colors.bgFill.miscMagenta,
      textColor: colors.text.miscMagentaInverse,
      borderColor: colors.border.miscMagenta
    },
    [BadgeVariantsEnum.crimson]: {
      backgroundColor: colors.bgFill.miscCrimson,
      textColor: colors.text.miscCrimsonInverse,
      borderColor: colors.border.miscCrimson
    },
    [BadgeVariantsEnum.neutral]: {
      backgroundColor: colors.bgFill.defaultInverse,
      textColor: colors.text.defaultInverse,
      borderColor: colors.border.defaultInverse
    }
  };
  const LIGHT_CONFIG = {
    [BadgeVariantsEnum.grey]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.defaultSecondary,
      borderColor: colors.border.defaultPrimary
    },
    [BadgeVariantsEnum.success]: {
      backgroundColor: colors.bgFill.stateSuccessSecondary,
      textColor: colors.text.stateSuccess,
      borderColor: colors.border.stateSuccess
    },
    [BadgeVariantsEnum.warning]: {
      backgroundColor: colors.bgFill.stateWarningSecondary,
      textColor: colors.text.stateWarning,
      borderColor: colors.border.stateWarning
    },
    [BadgeVariantsEnum.error]: {
      backgroundColor: colors.bgFill.stateErrorSecondary,
      textColor: colors.text.stateError,
      borderColor: colors.border.stateError
    },
    [BadgeVariantsEnum.purple]: {
      backgroundColor: colors.bgFill.miscPurpleSecondary,
      textColor: colors.text.miscPurple,
      borderColor: colors.border.miscPurple
    },
    [BadgeVariantsEnum.accent]: {
      backgroundColor: colors.bgFill.accentSecondary,
      textColor: colors.text.brandAccent,
      borderColor: colors.border.defaultAccent
    },
    [BadgeVariantsEnum.magenta]: {
      backgroundColor: colors.bgFill.miscMagentaSecondary,
      textColor: colors.text.miscMagenta,
      borderColor: colors.border.miscMagenta
    },
    [BadgeVariantsEnum.crimson]: {
      backgroundColor: colors.bgFill.miscCrimsonSecondary,
      textColor: colors.text.miscCrimson,
      borderColor: colors.border.miscCrimson
    },
    [BadgeVariantsEnum.neutral]: {
      backgroundColor: colors.bgFill.defaultSecondary,
      textColor: colors.text.defaultSecondary,
      borderColor: colors.border.defaultSecondary
    }
  };
  const config = type === 'dark' ? DARK_CONFIG : LIGHT_CONFIG;
  let variantFromConfig = config[variant];
  if (variantFromConfig === undefined) {
    variantFromConfig = LIGHT_CONFIG[BadgeVariantsEnum.grey];
  }
  if (state === 'disabled') {
    variantFromConfig.textColor = colors.text.defaultDisabled;
    variantFromConfig.backgroundColor = type === 'dark' ? colors.bgFill.defaultInverse : colors.bgFill.defaultDisabled;
  }
  const cornerStyle = {};
  if (corner !== undefined) {
    if (corner === 'left') {
      cornerStyle.borderRadius = size.CornerRadius.cornerRadius0;
      cornerStyle.borderBottomLeftRadius = size.CornerRadius.cornerRadius8;
      cornerStyle.paddingRight = size.Space.space12;
    }
    if (corner === 'right') {
      cornerStyle.borderRadius = size.CornerRadius.cornerRadius0;
      cornerStyle.borderBottomRightRadius = size.CornerRadius.cornerRadius8;
      cornerStyle.paddingLeft = size.Space.space12;
    }
  }
  const borderStyle = {};
  if (border) {
    borderStyle.borderWidth = 0.5;
    borderStyle.borderColor = variantFromConfig.borderColor;
  }
  let textVariant = TextToken.tiny_uppercase;
  if (textState !== undefined) {
    if (textState === 'primary') {
      textVariant = TextToken.tiny_medium;
    }
    if (textState === 'secondary') {
      textVariant = TextToken.tiny_regular;
    }
  }
  return {
    icon: variantFromConfig.icon,
    textColor: variantFromConfig.textColor,
    containerStyle: {
      height: 20,
      backgroundColor: variantFromConfig.backgroundColor,
      ...cornerStyle,
      ...borderStyle
    },
    textVariant: textVariant
  };
};
//# sourceMappingURL=config.js.map