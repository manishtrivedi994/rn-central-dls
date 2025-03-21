import { TextTokenV3 } from '../../typography/text';
export const VARIANT_STYLE_MAP = themeColor => {
  const PRIMARY = {
    DEFAULT: {
      fontColor: '#FFFFFF',
      backgroundColor: '#0E2021'
    },
    PRESSED: {
      fontColor: '#FFFFFF1A',
      backgroundColor: '#161616'
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
export const DISABLED = themeColor => ({
  fontColor: themeColor.text.defaultDisabled,
  backgroundColor: themeColor.bgFill.defaultDisabled
});
export const TEXT_VARIANT_MAP = {
  SMALL: TextTokenV3.semibold_200,
  MEDIUM: TextTokenV3.semibold_250,
  LARGE: TextTokenV3.semibold_350
};
//# sourceMappingURL=config.js.map