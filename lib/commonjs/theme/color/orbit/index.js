"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(require("../base"));
var _palette = _interopRequireDefault(require("../palette"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const orbitColor = {
  ..._base.default,
  bgFill: {
    ..._base.default.bgFill,
    /**
     * @deprecated May remove later
     */
    defaultPrimaryII: _palette.default.grey800,
    brand: _palette.default.grey700,
    brandSecondary: _palette.default.white,
    brandSecondaryHover: _palette.default.greyAlpha800,
    brandHover: _palette.default.greyAlpha800,
    defaultPrimary: _palette.default.whiteAlpha50,
    defaultSecondary: _palette.default.whiteAlpha200,
    defaultTertiary: _palette.default.grey100,
    defaultDisabled: _palette.default.whiteAlpha50,
    defaultInverse: _palette.default.grey100,
    accent: _palette.default.skyBlue400,
    accentHover: _palette.default.skyBlue400,
    stateWarning: _palette.default.orange600,
    stateWarningSecondary: _palette.default.orange50,
    stateSuccess: _palette.default.green700,
    /**
     * @deprecated May remove later
     */
    accentSecondaryII: _palette.default.skyBlue500
  },
  bgSurface: {
    ..._base.default.bgSurface,
    defaultInverse: _palette.default.grey800,
    brand: _palette.default.persianBlue50,
    accent: _palette.default.grey50,
    stateWarning: _palette.default.orange50,
    overlayPrimary: _palette.default.greyAlpha400
  },
  text: {
    ..._base.default.text,
    defaultPrimary: _palette.default.whiteAlpha800,
    defaultSecondary: _palette.default.whiteAlpha600,
    defaultDisabled: _palette.default.whiteAlpha200,
    defaultInverse: _palette.default.black,
    brand: _palette.default.greyAlpha800,
    brandInverse: _palette.default.whiteAlpha800,
    brandHover: _palette.default.greyAlpha800,
    brandAccent: _palette.default.skyBlue400,
    stateWarning: _palette.default.orange600,
    stateError: _palette.default.red300,
    stateSuccess: _palette.default.green700
  },
  border: {
    ..._base.default.border,
    defaultPrimary: _palette.default.whiteAlpha100,
    defaultBrand: _palette.default.grey900,
    defaultAccent: _palette.default.skyBlue300,
    defaultDisabled: _palette.default.whiteAlpha50,
    stateWarning: _palette.default.orange600,
    stateSuccess: _palette.default.green200
  },
  icon: {
    ..._base.default.icon,
    defaultPrimary: _palette.default.white,
    defaultSecondary: _palette.default.whiteAlpha600,
    defaultDisabled: _palette.default.whiteAlpha200,
    defaultInverse: _palette.default.black,
    brand: _palette.default.greyAlpha800,
    brandInverse: _palette.default.whiteAlpha800,
    brandHover: _palette.default.greyAlpha800,
    accent: _palette.default.skyBlue300,
    accentInverse: _palette.default.whiteAlpha800,
    warning: _palette.default.orange600,
    success: _palette.default.green700
  }
};
var _default = exports.default = orbitColor;
//# sourceMappingURL=index.js.map