import palettes from '../../color/palette';
export const bgFill = {
  primary: [palettes.whiteAlpha0, palettes.white],
  accentVertical: [palettes.blue50, palettes.whiteAlpha50],
  accentVerticalInverse: [palettes.whiteAlpha50, palettes.blue50],
  accentFadeSubtle: [palettes.blue50, palettes.white]
};
export const border = {
  accentVertical: [palettes.skyBlue500, palettes.whiteAlpha50],
  accentVerticalInverse: [palettes.whiteAlpha50, palettes.skyBlue500],
  primaryHorizontal: [palettes.whiteAlpha50, palettes.black],
  secondaryHorizontal: [palettes.whiteAlpha50, palettes.white],
  brandFadeSubtle: [palettes.orange500, palettes.whiteAlpha0],
  accentFade: [palettes.white, palettes.skyBlue400]
};
export const divider = {
  brandFadeHorizontal: [palettes.white, palettes.orange500, palettes.white],
  neutralFadeVertical: [palettes.white, palettes.grey200, palettes.white]
};
export const BaseGradients = {
  bgFill,
  border,
  divider
};
//# sourceMappingURL=index.js.map