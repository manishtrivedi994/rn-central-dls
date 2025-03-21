"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = exports.icon = exports.default = exports.border = exports.bgSurface = exports.bgFill = void 0;
var _palette = _interopRequireDefault(require("../palette"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const bgFill = exports.bgFill = {
  defaultPrimary: _palette.default.white,
  /**
   * @deprecated May remove later
   */
  defaultPrimaryII: _palette.default.white,
  defaultSecondary: _palette.default.grey50,
  defaultTertiary: _palette.default.grey100,
  defaultDisabled: _palette.default.grey50,
  defaultInverse: _palette.default.grey900,
  brand: _palette.default.orange500,
  brandSecondary: _palette.default.orange50,
  brandTertiary: _palette.default.orange0,
  brandHover: _palette.default.orange600,
  brandSecondaryHover: _palette.default.orange100,
  accent: _palette.default.blue700,
  accentSecondary: _palette.default.blue50,
  /**
   * @deprecated May remove later
   */
  accentSecondaryII: _palette.default.blue50,
  accentTertiary: _palette.default.skyBlue0,
  accentHover: _palette.default.blue800,
  accentSecondaryHover: _palette.default.blue100,
  stateError: _palette.default.red500,
  stateErrorSecondary: _palette.default.red50,
  stateErrorHover: _palette.default.red700,
  stateErrorSecondaryHover: _palette.default.red100,
  stateWarning: _palette.default.yellow500,
  stateWarningSecondary: _palette.default.yellow50,
  stateSuccess: _palette.default.green500,
  stateSuccessSecondary: _palette.default.green50,
  miscMagenta: _palette.default.magenta600,
  miscMagentaSecondary: _palette.default.magenta50,
  miscTeal: _palette.default.teal600,
  miscTealSecondary: _palette.default.teal50,
  miscPurple: _palette.default.purple600,
  miscPurpleSecondary: _palette.default.purple50,
  miscCrimson: _palette.default.crimson600,
  miscCrimsonSecondary: _palette.default.crimson50,
  translucentPrimary: _palette.default.whiteAlpha100,
  translucentSecondary: _palette.default.whiteAlpha400,
  translucentTertiary: _palette.default.whiteAlpha700,
  miscGold: _palette.default.gold400,
  miscGoldSecondary: _palette.default.gold50,
  miscGoldTertiary: _palette.default.gold0,
  miscGoldHover: _palette.default.gold600,
  miscGoldSecondaryHover: _palette.default.gold800
};
const bgSurface = exports.bgSurface = {
  defaultPrimary: _palette.default.white,
  defaultSecondary: _palette.default.grey50,
  defaultDisabled: _palette.default.grey50,
  defaultInverse: _palette.default.grey900,
  brand: _palette.default.orange50,
  accent: _palette.default.blue50,
  stateError: _palette.default.red50,
  stateWarning: _palette.default.yellow50,
  stateSuccess: _palette.default.green50,
  miscMagenta: _palette.default.magenta50,
  miscTeal: _palette.default.teal50,
  miscPurple: _palette.default.purple50,
  miscCrimson: _palette.default.crimson50,
  overlayPrimary: _palette.default.grey700,
  miscGold: _palette.default.gold0
};
const text = exports.text = {
  defaultPrimary: _palette.default.grey900,
  defaultSecondary: _palette.default.grey500,
  defaultTertiary: _palette.default.grey300,
  defaultDisabled: _palette.default.grey300,
  defaultInverse: _palette.default.white,
  brand: _palette.default.orange500,
  brandInverse: _palette.default.white,
  brandHover: _palette.default.orange600,
  brandAccent: _palette.default.blue700,
  brandAccentInverse: _palette.default.white,
  stateWarning: _palette.default.yellow600,
  stateWarningInverse: _palette.default.white,
  stateError: _palette.default.red500,
  stateErrorInverse: _palette.default.white,
  stateSuccess: _palette.default.green500,
  stateSuccessInverse: _palette.default.white,
  miscMagenta: _palette.default.magenta600,
  miscMagentaInverse: _palette.default.white,
  miscTeal: _palette.default.teal600,
  miscTealInverse: _palette.default.white,
  miscPurple: _palette.default.purple600,
  miscPurpleInverse: _palette.default.white,
  miscCrimson: _palette.default.crimson600,
  miscCrimsonInverse: _palette.default.white,
  miscGold: _palette.default.gold600,
  miscGoldInverse: _palette.default.white
};
const border = exports.border = {
  defaultPrimary: _palette.default.grey200,
  defaultSecondary: _palette.default.grey300,
  defaultBrand: _palette.default.orange500,
  defaultAccent: _palette.default.blue700,
  defaultDisabled: _palette.default.grey200,
  defaultWhite: _palette.default.white,
  defaultInverse: _palette.default.grey900,
  stateError: _palette.default.red300,
  stateWarning: _palette.default.yellow300,
  stateSuccess: _palette.default.green300,
  miscMagenta: _palette.default.magenta400,
  miscTeal: _palette.default.teal400,
  miscPurple: _palette.default.purple400,
  miscCrimson: _palette.default.crimson400,
  miscGold: _palette.default.gold400
};
const icon = exports.icon = {
  defaultPrimary: _palette.default.grey900,
  defaultSecondary: _palette.default.grey500,
  defaultTertiary: _palette.default.grey300,
  defaultDisabled: _palette.default.grey300,
  defaultInverse: _palette.default.white,
  brand: _palette.default.orange500,
  brandInverse: _palette.default.white,
  brandHover: _palette.default.orange600,
  accent: _palette.default.blue700,
  accentInverse: _palette.default.white,
  warning: _palette.default.yellow500,
  warningInverse: _palette.default.white,
  error: _palette.default.red500,
  errorInverse: _palette.default.white,
  success: _palette.default.green500,
  successInverse: _palette.default.white,
  magenta: _palette.default.magenta600,
  magentaInverse: _palette.default.white,
  teal: _palette.default.teal600,
  tealInverse: _palette.default.white,
  purple: _palette.default.purple600,
  purpleInverse: _palette.default.white,
  crimson: _palette.default.crimson600,
  crimsonInverse: _palette.default.white,
  miscGold: _palette.default.gold500,
  miscGoldInverse: _palette.default.white
};
const BaseColors = {
  bgFill,
  icon,
  border,
  text,
  bgSurface
};
var _default = exports.default = BaseColors;
//# sourceMappingURL=index.js.map