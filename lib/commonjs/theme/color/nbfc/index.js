"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(require("../base"));
var _palette = _interopRequireDefault(require("../palette"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const nbfcColor = {
  ..._base.default,
  bgFill: {
    ..._base.default.bgFill,
    defaultSecondary: _palette.default.lightBlue,
    defaultTertiary: _palette.default.darkBlue,
    brand: _palette.default.blue,
    brandSecondary: _palette.default.lightBlue,
    brandHover: _palette.default.blue,
    brandSecondaryHover: _palette.default.lightBlue,
    accent: _palette.default.blue,
    accentSecondary: _palette.default.lightBlue,
    accentTertiary: _palette.default.teal,
    accentHover: _palette.default.blue700,
    accentSecondaryHover: _palette.default.lightBlue,
    translucentPrimary: _palette.default.whiteAlpha100,
    translucentSecondary: _palette.default.whiteAlpha400,
    translucentTertiary: _palette.default.whiteAlpha700
  },
  bgSurface: {
    ..._base.default.bgSurface,
    overlayPrimary: _palette.default.greyAlpha700
  },
  text: {
    ..._base.default.text,
    defaultPrimary: _palette.default.grey800,
    brand: _palette.default.blue,
    brandHover: _palette.default.blue,
    brandAccent: _palette.default.blue //check with designer
  },
  border: {
    ..._base.default.border,
    defaultBrand: _palette.default.blue,
    defaultAccent: _palette.default.blue
  },
  icon: {
    ..._base.default.icon,
    defaultPrimary: _palette.default.blueGrey,
    brand: _palette.default.blue,
    brandHover: _palette.default.blue,
    accent: _palette.default.teal
  }
};
var _default = exports.default = nbfcColor;
//# sourceMappingURL=index.js.map