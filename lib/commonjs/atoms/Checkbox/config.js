"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEXT_VARIANT_MAP = exports.PRESSED = exports.DISABLED = exports.DEFAULT = exports.CHECKED = void 0;
var _text = require("../../typography/text");
const DISABLED = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultPrimary,
    backgroundColor: themeColor.bgFill.defaultSecondary
  },
  iconStyle: {
    color: themeColor.border.defaultDisabled
  }
});
exports.DISABLED = DISABLED;
const DEFAULT = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultPrimary,
    backgroundColor: themeColor.bgFill.defaultSecondary
  },
  iconStyle: {
    color: themeColor.icon.accent
  }
});
exports.DEFAULT = DEFAULT;
const CHECKED = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultAccent,
    backgroundColor: themeColor.bgFill.accentSecondary
  },
  iconStyle: {
    color: themeColor.icon.accent
  }
});
exports.CHECKED = CHECKED;
const PRESSED = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultAccent,
    backgroundColor: themeColor.bgFill.accentSecondaryHover
  },
  iconStyle: {
    color: themeColor.icon.accent
  }
});
exports.PRESSED = PRESSED;
const TEXT_VARIANT_MAP = exports.TEXT_VARIANT_MAP = {
  MEDIUM: {
    DEFAULT: _text.TextTokenV3.regular_250,
    EMPHASIS: _text.TextTokenV3.semibold_250
  },
  SMALL: {
    DEFAULT: _text.TextTokenV3.regular_200,
    EMPHASIS: _text.TextTokenV3.semibold_200
  }
};
//# sourceMappingURL=config.js.map