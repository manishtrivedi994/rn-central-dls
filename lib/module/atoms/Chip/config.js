export const getStyles = ({
  colors,
  disabled,
  selected
}) => {
  if (disabled) {
    return {
      borderWidth: 0,
      backgroundColor: colors.bgFill.defaultDisabled,
      labelColor: colors.text.defaultDisabled
    };
  }
  if (selected) {
    return {
      borderWidth: 1,
      borderColor: colors.border.defaultAccent,
      backgroundColor: colors.bgFill.accentSecondaryII,
      labelColor: colors.text.defaultPrimary
    };
  }
  return {
    borderWidth: 1,
    borderColor: colors.border.defaultPrimary,
    backgroundColor: colors.bgFill.defaultPrimary,
    labelColor: colors.text.defaultPrimary
  };
};
//# sourceMappingURL=config.js.map