import { AppearanceEnum, BG } from './types';
const NEW_BADGE_STYLE_MAP_FN = colors => ({
  [AppearanceEnum.GREY]: {
    [BG.PRIMARY]: {
      backgroundColor: colors.bgFill.defaultInverse,
      textColor: colors.text.defaultInverse
    },
    [BG.SECONDARY]: {
      backgroundColor: colors.bgFill.defaultSecondary,
      textColor: colors.text.defaultPrimary
    },
    [BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.defaultSecondary
    }
  },
  [AppearanceEnum.BLUE]: {
    [BG.PRIMARY]: {
      backgroundColor: colors.bgFill.accent,
      textColor: colors.text.brandAccentInverse
    },
    [BG.SECONDARY]: {
      backgroundColor: colors.bgFill.accentSecondary,
      textColor: colors.text.brandAccent
    },
    [BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.brandAccent
    }
  },
  [AppearanceEnum.RED]: {
    [BG.PRIMARY]: {
      backgroundColor: colors.bgFill.stateError,
      textColor: colors.text.stateErrorInverse
    },
    [BG.SECONDARY]: {
      backgroundColor: colors.bgFill.stateErrorSecondary,
      textColor: colors.text.stateError
    },
    [BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.stateError
    }
  },
  [AppearanceEnum.GREEN]: {
    [BG.PRIMARY]: {
      backgroundColor: colors.bgFill.stateSuccess,
      textColor: colors.text.stateSuccessInverse
    },
    [BG.SECONDARY]: {
      backgroundColor: colors.bgFill.stateSuccessSecondary,
      textColor: colors.text.stateSuccess
    },
    [BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.stateSuccess
    }
  },
  [AppearanceEnum.ORANGE]: {
    [BG.PRIMARY]: {
      backgroundColor: colors.bgFill.brand,
      textColor: colors.text.defaultInverse
    },
    [BG.SECONDARY]: {
      backgroundColor: colors.bgFill.brandSecondary,
      textColor: colors.text.brand
    },
    [BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.brand
    }
  },
  [AppearanceEnum.DISABLED]: {
    [BG.PRIMARY]: {
      backgroundColor: colors.bgFill.defaultDisabled,
      textColor: colors.text.defaultDisabled
    },
    [BG.SECONDARY]: {
      backgroundColor: colors.bgFill.defaultDisabled,
      textColor: colors.text.defaultDisabled
    },
    [BG.INVERSE]: {
      backgroundColor: colors.bgFill.defaultPrimary,
      textColor: colors.text.defaultDisabled
    }
  }
});
export const getStyles = ({
  colors,
  appearance,
  bg
}) => {
  switch (appearance) {
    case AppearanceEnum.PRIMARY:
      return {
        backgroundColor: colors.bgFill.accent,
        textColor: colors.text.brandAccentInverse
      };
    case AppearanceEnum.SECONDARY:
      return {
        backgroundColor: colors.bgFill.defaultPrimary,
        textColor: colors.text.brandAccent
      };
    case AppearanceEnum.TERTIARY:
      return {
        backgroundColor: colors.bgFill.defaultSecondary,
        textColor: colors.text.defaultPrimary
      };
    case AppearanceEnum.IMPORTANT:
      return {
        backgroundColor: colors.bgFill.stateError,
        textColor: colors.text.stateErrorInverse
      };
    case AppearanceEnum.ADDED:
      return {
        backgroundColor: colors.bgFill.stateSuccessSecondary,
        textColor: colors.text.stateSuccess
      };
    case AppearanceEnum.REMOVED:
      return {
        backgroundColor: colors.bgFill.stateErrorSecondary,
        textColor: colors.text.stateError
      };
    case AppearanceEnum.INVERSE:
      return {
        backgroundColor: colors.bgFill.defaultPrimary,
        textColor: colors.text.brand
      };
    case AppearanceEnum.DISABLED:
      return {
        backgroundColor: colors.bgFill.defaultDisabled,
        textColor: colors.text.defaultDisabled
      };
  }

  // NEW DLS TAGS
  const mapper = NEW_BADGE_STYLE_MAP_FN(colors);
  let styler = mapper[AppearanceEnum.GREY]; // default as grey
  if (mapper[appearance]) {
    styler = mapper[appearance];
  }
  let style = styler[BG.PRIMARY];
  if (styler[bg]) {
    style = styler[bg];
  }
  return style;
};
//# sourceMappingURL=config.js.map