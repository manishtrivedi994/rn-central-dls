import { TextTokenV3 } from '../../typography/text';
export const DISABLED = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultPrimary,
    backgroundColor: themeColor.bgFill.defaultSecondary
  },
  innerContainerStyle: {
    backgroundColor: themeColor.bgFill.defaultInverse
  }
});
export const DEFAULT = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultPrimary,
    backgroundColor: themeColor.bgFill.defaultSecondary
  },
  innerContainerStyle: {}
});
export const CHECKED = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultAccent,
    backgroundColor: themeColor.bgFill.accentSecondary
  },
  innerContainerStyle: {
    backgroundColor: themeColor.border.defaultAccent
  }
});
export const PRESSED = themeColor => ({
  outerContainerStyle: {
    borderWidth: 1,
    borderColor: themeColor.border.defaultAccent,
    backgroundColor: themeColor.bgFill.accentSecondaryHover
  },
  innerContainerStyle: {
    backgroundColor: themeColor.border.defaultAccent
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