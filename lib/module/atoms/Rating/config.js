export const getStyles = ({
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
//# sourceMappingURL=config.js.map