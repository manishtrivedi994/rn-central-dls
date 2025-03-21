"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VARIANT_STYLE_MAP = exports.TEXT_VARIANT_MAP = exports.DISABLED = void 0;
var _text = require("../../typography/text");
const VARIANT_STYLE_MAP = themeColor => {
  const PRIMARY = {
    DEFAULT: {
      fontColor: themeColor.text.brandInverse,
      backgroundColor: themeColor.bgFill.brand
    },
    PRESSED: {
      fontColor: themeColor.text.brandInverse,
      backgroundColor: themeColor.bgFill.brandHover
    }
  };
  const SECONDARY = {
    DEFAULT: {
      fontColor: themeColor.text.brand,
      backgroundColor: themeColor.bgFill.brandSecondary
    },
    PRESSED: {
      fontColor: themeColor.text.brandHover,
      backgroundColor: themeColor.bgFill.brandSecondaryHover
    }
  };
  const TERTIARY = {
    DEFAULT: {
      fontColor: themeColor.text.brand,
      backgroundColor: themeColor.bgFill.defaultPrimary
    },
    PRESSED: {
      fontColor: themeColor.text.brandHover,
      backgroundColor: themeColor.bgFill.defaultSecondary
    }
  };
  const DESTRUCTIVE = {
    DEFAULT: {
      fontColor: themeColor.text.stateError,
      backgroundColor: themeColor.bgFill.defaultPrimary
    },
    PRESSED: {
      fontColor: themeColor.text.stateError,
      backgroundColor: themeColor.bgFill.defaultPrimary
    }
  };
  const DARK = {
    DEFAULT: {
      fontColor: themeColor.text.brandInverse,
      backgroundColor: themeColor.bgFill.defaultInverse
    },
    PRESSED: {
      fontColor: themeColor.text.brandInverse,
      backgroundColor: themeColor.bgFill.defaultInverse
    }
  };
  return {
    PRIMARY,
    SECONDARY,
    TERTIARY,
    DESTRUCTIVE,
    DARK
  };
};
exports.VARIANT_STYLE_MAP = VARIANT_STYLE_MAP;
const DISABLED = themeColor => ({
  fontColor: themeColor.text.defaultDisabled,
  backgroundColor: themeColor.bgFill.defaultDisabled
});
exports.DISABLED = DISABLED;
const TEXT_VARIANT_MAP = exports.TEXT_VARIANT_MAP = {
  SMALL: _text.TextTokenV3.semibold_200,
  MEDIUM: _text.TextTokenV3.semibold_250,
  LARGE: _text.TextTokenV3.semibold_350
};
//# sourceMappingURL=config.js.map