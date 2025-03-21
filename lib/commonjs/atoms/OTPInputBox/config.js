"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBorderColor = void 0;
const getBorderColor = (showFocused, showError, colors) => {
  if (showError) {
    return colors.border.stateError;
  } else if (showFocused) {
    return colors.border.defaultAccent;
  }
  return colors.border.defaultPrimary;
};
exports.getBorderColor = getBorderColor;
//# sourceMappingURL=config.js.map