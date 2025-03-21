export const getStyles = ({
  colors,
  disabled,
  selected
}) => {
  if (disabled) {
    return {
      borderColor: colors.border.defaultDisabled,
      backgroundColor: colors.bgFill.defaultDisabled,
      labelColor: colors.text.defaultDisabled
    };
  }
  if (selected) {
    return {
      borderColor: colors.border.defaultAccent,
      backgroundColor: colors.bgFill.accentSecondary,
      labelColor: colors.text.brandAccent
    };
  }
  return {
    borderColor: colors.border.defaultPrimary,
    backgroundColor: colors.bgFill.defaultPrimary,
    labelColor: colors.text.defaultSecondary
  };
};
//# sourceMappingURL=config.js.map