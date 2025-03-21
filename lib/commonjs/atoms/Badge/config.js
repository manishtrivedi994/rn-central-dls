"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchBadgeStylingBasedOnProps = exports.BadgeVariantsEnum = void 0;
var _size = _interopRequireDefault(require("../../theme/size"));
var _text = require("../../typography/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let BadgeVariantsEnum = exports.BadgeVariantsEnum = /*#__PURE__*/function (BadgeVariantsEnum) {
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
const fetchBadgeStylingBasedOnProps = ({
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
      cornerStyle.borderRadius = _size.default.CornerRadius.cornerRadius0;
      cornerStyle.borderBottomLeftRadius = _size.default.CornerRadius.cornerRadius8;
      cornerStyle.paddingRight = _size.default.Space.space12;
    }
    if (corner === 'right') {
      cornerStyle.borderRadius = _size.default.CornerRadius.cornerRadius0;
      cornerStyle.borderBottomRightRadius = _size.default.CornerRadius.cornerRadius8;
      cornerStyle.paddingLeft = _size.default.Space.space12;
    }
  }
  const borderStyle = {};
  if (border) {
    borderStyle.borderWidth = 0.5;
    borderStyle.borderColor = variantFromConfig.borderColor;
  }
  let textVariant = _text.TextToken.tiny_uppercase;
  if (textState !== undefined) {
    if (textState === 'primary') {
      textVariant = _text.TextToken.tiny_medium;
    }
    if (textState === 'secondary') {
      textVariant = _text.TextToken.tiny_regular;
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
exports.fetchBadgeStylingBasedOnProps = fetchBadgeStylingBasedOnProps;
//# sourceMappingURL=config.js.map