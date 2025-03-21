"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VARIANT_STYLE_MAP = exports.TEXT_VARIANT_MAP = exports.INVERSE_VARIANT_STYLE_MAP = exports.DISABLED = void 0;
var _text = require("../../typography/text");
const VARIANT_STYLE_MAP = themeColor => {
  const GHOST = {
    DEFAULT: {
      fontColor: themeColor.text.defaultSecondary
    },
    PRESSED: {
      fontColor: themeColor.text.defaultSecondary,
      backgroundColor: themeColor.bgFill.defaultSecondary
    }
  };
  const BRAND = {
    DEFAULT: {
      fontColor: themeColor.text.brand
    },
    PRESSED: {
      fontColor: themeColor.text.brandHover
    }
  };
  const ACCENT = {
    DEFAULT: {
      fontColor: themeColor.text.brandAccent
    },
    PRESSED: {
      fontColor: themeColor.text.brandAccent
    }
  };
  const BLACK = {
    DEFAULT: {
      fontColor: themeColor.text.defaultPrimary
    },
    PRESSED: {
      fontColor: themeColor.text.defaultSecondary
    }
  };
  return {
    GHOST,
    BRAND,
    ACCENT,
    BLACK
  };
};
exports.VARIANT_STYLE_MAP = VARIANT_STYLE_MAP;
const INVERSE_VARIANT_STYLE_MAP = themeColor => {
  const GHOST = {
    DEFAULT: {
      fontColor: themeColor.text.defaultInverse
    },
    PRESSED: {
      fontColor: themeColor.text.defaultInverse
    }
  };
  const BRAND = {
    DEFAULT: {
      fontColor: themeColor.text.brandInverse
    },
    PRESSED: {
      fontColor: themeColor.text.brandInverse
    }
  };
  const ACCENT = {
    DEFAULT: {
      fontColor: themeColor.text.brandAccentInverse
    },
    PRESSED: {
      fontColor: themeColor.text.brandAccentInverse
    }
  };
  const BLACK = {
    DEFAULT: {
      fontColor: themeColor.text.defaultInverse
    },
    PRESSED: {
      fontColor: themeColor.text.defaultInverse
    }
  };
  return {
    GHOST,
    BRAND,
    ACCENT,
    BLACK
  };
};
exports.INVERSE_VARIANT_STYLE_MAP = INVERSE_VARIANT_STYLE_MAP;
const DISABLED = themeColor => ({
  fontColor: themeColor.text.defaultDisabled
});
exports.DISABLED = DISABLED;
const TEXT_VARIANT_MAP = exports.TEXT_VARIANT_MAP = {
  SMALL: _text.TextTokenV3.semibold_200,
  MEDIUM: _text.TextTokenV3.semibold_250,
  LARGE: _text.TextTokenV3.semibold_350,
  TINY: _text.TextTokenV3.semibold_150
};
//# sourceMappingURL=config.js.map