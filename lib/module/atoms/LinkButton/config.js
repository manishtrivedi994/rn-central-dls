import { TextTokenV3 } from '../../typography/text';
export const VARIANT_STYLE_MAP = themeColor => {
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
export const INVERSE_VARIANT_STYLE_MAP = themeColor => {
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
export const DISABLED = themeColor => ({
  fontColor: themeColor.text.defaultDisabled
});
export const TEXT_VARIANT_MAP = {
  SMALL: TextTokenV3.semibold_200,
  MEDIUM: TextTokenV3.semibold_250,
  LARGE: TextTokenV3.semibold_350,
  TINY: TextTokenV3.semibold_150
};
//# sourceMappingURL=config.js.map