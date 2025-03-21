import { TextTokenV3 } from '../../typography/text';
export const DISABLED = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultPrimary,
    backgroundColor: themeColor.bgFill.defaultSecondary
  },
  iconStyle: {
    color: themeColor.border.defaultDisabled
  }
});
export const DEFAULT = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultPrimary,
    backgroundColor: themeColor.bgFill.defaultSecondary
  },
  iconStyle: {
    color: themeColor.icon.accent
  }
});
export const CHECKED = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultAccent,
    backgroundColor: themeColor.bgFill.accentSecondary
  },
  iconStyle: {
    color: themeColor.icon.accent
  }
});
export const PRESSED = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultAccent,
    backgroundColor: themeColor.bgFill.accentSecondaryHover
  },
  iconStyle: {
    color: themeColor.icon.accent
  }
});
export const TEXT_VARIANT_MAP = {
  MEDIUM: {
    DEFAULT: TextTokenV3.regular_250,
    EMPHASIS: TextTokenV3.semibold_250
  },
  SMALL: {
    DEFAULT: TextTokenV3.regular_200,
    EMPHASIS: TextTokenV3.semibold_200
  }
};
//# sourceMappingURL=config.js.map