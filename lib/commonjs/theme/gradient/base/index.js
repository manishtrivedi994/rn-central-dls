"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divider = exports.border = exports.bgFill = exports.BaseGradients = void 0;
var _palette = _interopRequireDefault(require("../../color/palette"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const bgFill = exports.bgFill = {
  primary: [_palette.default.whiteAlpha0, _palette.default.white],
  accentVertical: [_palette.default.blue50, _palette.default.whiteAlpha50],
  accentVerticalInverse: [_palette.default.whiteAlpha50, _palette.default.blue50],
  accentFadeSubtle: [_palette.default.blue50, _palette.default.white]
};
const border = exports.border = {
  accentVertical: [_palette.default.skyBlue500, _palette.default.whiteAlpha50],
  accentVerticalInverse: [_palette.default.whiteAlpha50, _palette.default.skyBlue500],
  primaryHorizontal: [_palette.default.whiteAlpha50, _palette.default.black],
  secondaryHorizontal: [_palette.default.whiteAlpha50, _palette.default.white],
  brandFadeSubtle: [_palette.default.orange500, _palette.default.whiteAlpha0],
  accentFade: [_palette.default.white, _palette.default.skyBlue400]
};
const divider = exports.divider = {
  brandFadeHorizontal: [_palette.default.white, _palette.default.orange500, _palette.default.white],
  neutralFadeVertical: [_palette.default.white, _palette.default.grey200, _palette.default.white]
};
const BaseGradients = exports.BaseGradients = {
  bgFill,
  border,
  divider
};
//# sourceMappingURL=index.js.map