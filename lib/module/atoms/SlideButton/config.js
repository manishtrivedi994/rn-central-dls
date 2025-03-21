import size from '../../theme/size';
import { TextTokenV3 } from '../../typography/text/styles';
export const AnimationConfig = {
  defaultSwipePercentage: 0.92,
  defaultSliderWidth: 300,
  maximumTitleOpacity: 1,
  minimumTitleOpacity: 0.1,
  animationDuration: 200,
  getBackAnimationDelay: 500,
  defaultContainerSpacing: 4
};
export const VARIANT_STYLE_MAP = themeColor => {
  const EMERGENCY = {
    DEFAULT: {
      thumbStyle: {
        backgroundColor: themeColor.bgFill.defaultPrimary
      },
      containerStyle: {
        backgroundColor: themeColor.bgFill.stateError
      },
      thumbIconStyle: {
        color: themeColor.icon.error
      },
      textStyle: {}
    },
    PRESSED: {
      thumbStyle: {
        backgroundColor: themeColor.bgFill.stateErrorSecondary
      },
      containerStyle: {
        backgroundColor: themeColor.bgFill.stateError
      },
      thumbIconStyle: {
        color: themeColor.icon.error
      },
      textStyle: {}
    }
  };
  const NORMAL = {
    DEFAULT: {
      thumbStyle: {
        backgroundColor: themeColor.bgFill.defaultPrimary
      },
      containerStyle: {
        backgroundColor: themeColor.bgFill.brand
      },
      textStyle: {},
      thumbIconStyle: {
        color: themeColor.icon.brand
      }
    },
    PRESSED: {
      thumbStyle: {
        backgroundColor: themeColor.bgFill.brandSecondaryHover
      },
      containerStyle: {
        backgroundColor: themeColor.bgFill.brand
      },
      textStyle: {},
      thumbIconStyle: {
        color: themeColor.icon.brand
      }
    }
  };
  return {
    EMERGENCY,
    NORMAL
  };
};
export const DISABLED = themeColor => ({
  containerStyle: {
    backgroundColor: themeColor.bgFill.defaultDisabled
  },
  thumbStyle: {
    backgroundColor: themeColor.bgFill.defaultPrimary
  },
  textStyle: {
    fontColor: themeColor.text.defaultDisabled
  },
  thumbIconStyle: {
    color: themeColor.icon.defaultDisabled
  }
});
export const SIZE_VARIANT_MAP = {
  MEDIUM: {
    textStyle: {
      variant: TextTokenV3.semibold_250
    },
    thumbStyle: {
      height: size.Size.size32,
      width: size.Size.size32
    }
  },
  LARGE: {
    textStyle: {
      variant: TextTokenV3.semibold_350
    },
    thumbStyle: {
      height: size.Size.size40,
      width: size.Size.size40
    }
  }
};
//# sourceMappingURL=config.js.map