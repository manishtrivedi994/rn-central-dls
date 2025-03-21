"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
var _types = require("./types");
const NEW_BADGE_STYLE_MAP_FN = colors => ({
  [_types.AppearanceEnum.GREY]: {
    [_types.BG.PRIMARY]: {
      backgroundColor: colors.bgFill.defaultInverse,
      textColor: colors.text.defaultInverse
    },
    [_types.BG.SECONDARY]: {
      backgroundColor: colors.bgFill.defaultSecondary,
      textColor: colors.text.defaultPrimary
    },
    [_types.BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.defaultSecondary
    }
  },
  [_types.AppearanceEnum.BLUE]: {
    [_types.BG.PRIMARY]: {
      backgroundColor: colors.bgFill.accent,
      textColor: colors.text.brandAccentInverse
    },
    [_types.BG.SECONDARY]: {
      backgroundColor: colors.bgFill.accentSecondary,
      textColor: colors.text.brandAccent
    },
    [_types.BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.brandAccent
    }
  },
  [_types.AppearanceEnum.RED]: {
    [_types.BG.PRIMARY]: {
      backgroundColor: colors.bgFill.stateError,
      textColor: colors.text.stateErrorInverse
    },
    [_types.BG.SECONDARY]: {
      backgroundColor: colors.bgFill.stateErrorSecondary,
      textColor: colors.text.stateError
    },
    [_types.BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.stateError
    }
  },
  [_types.AppearanceEnum.GREEN]: {
    [_types.BG.PRIMARY]: {
      backgroundColor: colors.bgFill.stateSuccess,
      textColor: colors.text.stateSuccessInverse
    },
    [_types.BG.SECONDARY]: {
      backgroundColor: colors.bgFill.stateSuccessSecondary,
      textColor: colors.text.stateSuccess
    },
    [_types.BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.stateSuccess
    }
  },
  [_types.AppearanceEnum.ORANGE]: {
    [_types.BG.PRIMARY]: {
      backgroundColor: colors.bgFill.brand,
      textColor: colors.text.defaultInverse
    },
    [_types.BG.SECONDARY]: {
      backgroundColor: colors.bgFill.brandSecondary,
      textColor: colors.text.brand
    },
    [_types.BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.brand
    }
  },
  [_types.AppearanceEnum.DISABLED]: {
    [_types.BG.PRIMARY]: {
      backgroundColor: colors.bgFill.defaultDisabled,
      textColor: colors.text.defaultDisabled
    },
    [_types.BG.SECONDARY]: {
      backgroundColor: colors.bgFill.defaultDisabled,
      textColor: colors.text.defaultDisabled
    },
    [_types.BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.defaultDisabled
    }
  }
});
const getStyles = ({
  colors,
  appearance,
  bg
}) => {
  switch (appearance) {
    case _types.AppearanceEnum.PRIMARY:
      return {
        backgroundColor: colors.bgFill.accent,
        textColor: colors.text.brandAccentInverse
      };
    case _types.AppearanceEnum.SECONDARY:
      return {
        backgroundColor: colors.bgFill.defaultPrimary,
        textColor: colors.text.brandAccent
      };
    case _types.AppearanceEnum.TERTIARY:
      return {
        backgroundColor: colors.bgFill.defaultSecondary,
        textColor: colors.text.defaultPrimary
      };
    case _types.AppearanceEnum.IMPORTANT:
      return {
        backgroundColor: colors.bgFill.stateError,
        textColor: colors.text.stateErrorInverse
      };
    case _types.AppearanceEnum.ADDED:
      return {
        backgroundColor: colors.bgFill.stateSuccessSecondary,
        textColor: colors.text.stateSuccess
      };
    case _types.AppearanceEnum.REMOVED:
      return {
        backgroundColor: colors.bgFill.stateErrorSecondary,
        textColor: colors.text.stateError
      };
    case _types.AppearanceEnum.INVERSE:
      return {
        backgroundColor: colors.bgFill.defaultPrimary,
        textColor: colors.text.brand
      };
    case _types.AppearanceEnum.DISABLED:
      return {
        backgroundColor: colors.bgFill.defaultDisabled,
        textColor: colors.text.defaultDisabled
      };
  }

  // NEW DLS TAGS
  const mapper = NEW_BADGE_STYLE_MAP_FN(colors);
  let styler = mapper[_types.AppearanceEnum.GREY]; // default as grey
  if (mapper[appearance]) {
    styler = mapper[appearance];
  }
  let style = styler[_types.BG.PRIMARY];
  if (styler[bg]) {
    style = styler[bg];
  }
  return style;
};
exports.getStyles = getStyles;
//# sourceMappingURL=config.js.map