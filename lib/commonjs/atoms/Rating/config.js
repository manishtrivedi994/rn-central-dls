"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = void 0;
const getStyles = ({
  colors,
  disabled
}) => {
  if (disabled) {
    return {
      color: colors.bgFill.defaultTertiary,
      activeColor: colors.bgFill.defaultTertiary
    };
  }
  return {
    color: colors.bgFill.defaultTertiary,
    activeColor: colors.bgFill.stateWarning
  };
};
exports.getStyles = getStyles;
//# sourceMappingURL=config.js.map