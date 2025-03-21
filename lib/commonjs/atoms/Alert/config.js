"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlertStyles = void 0;
const getAlertStyles = ({
  type,
  priority,
  colors
}) => {
  const darkContentStyle = {
    textColor: colors.text.defaultPrimary,
    iconColor: colors.icon.defaultPrimary
  };
  const lightContentStyle = {
    textColor: colors.text.stateErrorInverse,
    iconColor: colors.icon.successInverse
  };
  const HIGH_PRIORITY = {
    ERROR: {
      backgroundColor: colors.bgFill.stateError,
      ...lightContentStyle
    },
    WARNING: {
      backgroundColor: colors.bgFill.stateWarning,
      ...darkContentStyle
    },
    SUCCESS: {
      backgroundColor: colors.bgFill.stateSuccess,
      ...lightContentStyle
    },
    INFO: {
      backgroundColor: colors.bgFill.accent,
      ...lightContentStyle
    }
  };
  const LOW_PRIORITY = {
    ERROR: {
      backgroundColor: colors.bgFill.stateErrorSecondary,
      ...darkContentStyle
    },
    WARNING: {
      backgroundColor: colors.bgFill.stateWarningSecondary,
      ...darkContentStyle
    },
    SUCCESS: {
      backgroundColor: colors.bgFill.stateSuccessSecondary,
      ...darkContentStyle
    },
    INFO: {
      backgroundColor: colors.bgFill.accentSecondary,
      ...darkContentStyle
    }
  };
  return priority === 'HIGH' ? HIGH_PRIORITY[type] : LOW_PRIORITY[type];
};
exports.getAlertStyles = getAlertStyles;
//# sourceMappingURL=config.js.map