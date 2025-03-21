import BaseColors from '../base';
import palette from '../palette';
const nbfcColor = {
  ...BaseColors,
  bgFill: {
    ...BaseColors.bgFill,
    defaultSecondary: palette.lightBlue,
    defaultTertiary: palette.darkBlue,
    brand: palette.blue,
    brandSecondary: palette.lightBlue,
    brandHover: palette.blue,
    brandSecondaryHover: palette.lightBlue,
    accent: palette.blue,
    accentSecondary: palette.lightBlue,
    accentTertiary: palette.teal,
    accentHover: palette.blue700,
    accentSecondaryHover: palette.lightBlue,
    translucentPrimary: palette.whiteAlpha100,
    translucentSecondary: palette.whiteAlpha400,
    translucentTertiary: palette.whiteAlpha700
  },
  bgSurface: {
    ...BaseColors.bgSurface,
    overlayPrimary: palette.greyAlpha700
  },
  text: {
    ...BaseColors.text,
    defaultPrimary: palette.grey800,
    brand: palette.blue,
    brandHover: palette.blue,
    brandAccent: palette.blue //check with designer
  },
  border: {
    ...BaseColors.border,
    defaultBrand: palette.blue,
    defaultAccent: palette.blue
  },
  icon: {
    ...BaseColors.icon,
    defaultPrimary: palette.blueGrey,
    brand: palette.blue,
    brandHover: palette.blue,
    accent: palette.teal
  }
};
export default nbfcColor;
//# sourceMappingURL=index.js.map