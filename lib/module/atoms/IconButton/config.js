export const VARIANT_STYLE_MAP = themeColor => {
  const WITHOUT_BG = {
    DEFAULT: {
      backgroundColor: 'transparent'
    },
    PRESSED: {
      backgroundColor: themeColor.bgFill.defaultSecondary
    }
  };
  const WITH_BG = {
    DEFAULT: {
      backgroundColor: themeColor.bgFill.brandSecondary
    },
    PRESSED: {
      backgroundColor: themeColor.bgFill.brandSecondaryHover
    }
  };
  const INVERSE = {
    DEFAULT: {
      backgroundColor: 'transparent'
    },
    PRESSED: {
      backgroundColor: themeColor.bgFill.defaultInverse
    }
  };
  return {
    WITHOUT_BG,
    WITH_BG,
    INVERSE
  };
};
export const DISABLED = (themeColor, type) => {
  switch (type) {
    case 'WITHOUT_BG':
      return {
        iconColor: themeColor.text.defaultDisabled,
        backgroundColor: 'transparent'
      };
    case 'WITH_BG':
      return {
        iconColor: themeColor.text.defaultDisabled,
        backgroundColor: themeColor.bgFill.defaultDisabled
      };
    case 'INVERSE':
      return {
        iconColor: themeColor.text.defaultDisabled,
        backgroundColor: themeColor.bgFill.defaultInverse
      };
    default:
      return {
        iconColor: themeColor.icon.defaultDisabled,
        backgroundColor: themeColor.bgFill.defaultDisabled
      };
  }
};
//# sourceMappingURL=config.js.map