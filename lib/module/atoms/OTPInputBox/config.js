export const getBorderColor = (showFocused, showError, colors) => {
  if (showError) {
    return colors.border.stateError;
  } else if (showFocused) {
    return colors.border.defaultAccent;
  }
  return colors.border.defaultPrimary;
};
//# sourceMappingURL=config.js.map