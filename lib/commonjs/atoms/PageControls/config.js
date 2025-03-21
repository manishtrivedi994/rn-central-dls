"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VISIBLIE_NODES = exports.ThemeColors = exports.NODE_SIZE = void 0;
var _rnCentralDls = require("rn-central-dls");
const ThemeColors = color => ({
  Light: {
    activeColor: color.icon.defaultInverse,
    inActiveColor: color.bgFill.defaultTertiary
  },
  Dark: {
    activeColor: color.icon.defaultPrimary,
    inActiveColor: color.icon.defaultTertiary
  }
});
exports.ThemeColors = ThemeColors;
const VISIBLIE_NODES = exports.VISIBLIE_NODES = 6;
const NODE_SIZE = exports.NODE_SIZE = _rnCentralDls.Sizes.Size.size8;
//# sourceMappingURL=config.js.map