"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VARIANT_STYLE_MAP = exports.SIZE_VARIANT_MAP = exports.DISABLED = exports.AnimationConfig = void 0;
var _size = _interopRequireDefault(require("../../theme/size"));
var _styles = require("../../typography/text/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AnimationConfig = exports.AnimationConfig = {
  defaultSwipePercentage: 0.92,
  defaultSliderWidth: 300,
  maximumTitleOpacity: 1,
  minimumTitleOpacity: 0.1,
  animationDuration: 200,
  getBackAnimationDelay: 500,
  defaultContainerSpacing: 4
};
const VARIANT_STYLE_MAP = themeColor => {
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
exports.VARIANT_STYLE_MAP = VARIANT_STYLE_MAP;
const DISABLED = themeColor => ({
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
exports.DISABLED = DISABLED;
const SIZE_VARIANT_MAP = exports.SIZE_VARIANT_MAP = {
  MEDIUM: {
    textStyle: {
      variant: _styles.TextTokenV3.semibold_250
    },
    thumbStyle: {
      height: _size.default.Size.size32,
      width: _size.default.Size.size32
    }
  },
  LARGE: {
    textStyle: {
      variant: _styles.TextTokenV3.semibold_350
    },
    thumbStyle: {
      height: _size.default.Size.size40,
      width: _size.default.Size.size40
    }
  }
};
//# sourceMappingURL=config.js.map