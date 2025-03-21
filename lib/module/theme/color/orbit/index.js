import BaseColors from '../base';
import palette from '../palette';
const orbitColor = {
  ...BaseColors,
  bgFill: {
    ...BaseColors.bgFill,
    /**
     * @deprecated May remove later
     */
    defaultPrimaryII: palette.grey800,
    brand: palette.grey700,
    brandSecondary: palette.white,
    brandSecondaryHover: palette.greyAlpha800,
    brandHover: palette.greyAlpha800,
    defaultPrimary: palette.whiteAlpha50,
    defaultSecondary: palette.whiteAlpha200,
    defaultTertiary: palette.grey100,
    defaultDisabled: palette.whiteAlpha50,
    defaultInverse: palette.grey100,
    accent: palette.skyBlue400,
    accentHover: palette.skyBlue400,
    stateWarning: palette.orange600,
    stateWarningSecondary: palette.orange50,
    stateSuccess: palette.green700,
    /**
     * @deprecated May remove later
     */
    accentSecondaryII: palette.skyBlue500
  },
  bgSurface: {
    ...BaseColors.bgSurface,
    defaultInverse: palette.grey800,
    brand: palette.persianBlue50,
    accent: palette.grey50,
    stateWarning: palette.orange50,
    overlayPrimary: palette.greyAlpha400
  },
  text: {
    ...BaseColors.text,
    defaultPrimary: palette.whiteAlpha800,
    defaultSecondary: palette.whiteAlpha600,
    defaultDisabled: palette.whiteAlpha200,
    defaultInverse: palette.black,
    brand: palette.greyAlpha800,
    brandInverse: palette.whiteAlpha800,
    brandHover: palette.greyAlpha800,
    brandAccent: palette.skyBlue400,
    stateWarning: palette.orange600,
    stateError: palette.red300,
    stateSuccess: palette.green700
  },
  border: {
    ...BaseColors.border,
    defaultPrimary: palette.whiteAlpha100,
    defaultBrand: palette.grey900,
    defaultAccent: palette.skyBlue300,
    defaultDisabled: palette.whiteAlpha50,
    stateWarning: palette.orange600,
    stateSuccess: palette.green200
  },
  icon: {
    ...BaseColors.icon,
    defaultPrimary: palette.white,
    defaultSecondary: palette.whiteAlpha600,
    defaultDisabled: palette.whiteAlpha200,
    defaultInverse: palette.black,
    brand: palette.greyAlpha800,
    brandInverse: palette.whiteAlpha800,
    brandHover: palette.greyAlpha800,
    accent: palette.skyBlue300,
    accentInverse: palette.whiteAlpha800,
    warning: palette.orange600,
    success: palette.green700
  }
};
export default orbitColor;
//# sourceMappingURL=index.js.map