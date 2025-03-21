export const INDETERMINATE_DURATION = 2500;
export const INDETERMINATE_MAX_WIDTH = 0.5;
export const returnIndeterTransXInterpolation = (width, isRTL) => ({
  inputRange: [0, 0.5, 1],
  outputRange: [(isRTL ? 1 : -1) * 0.5 * width, (isRTL ? 1 : -1) * 0.5 * INDETERMINATE_MAX_WIDTH * width, (isRTL ? -1 : 1) * 0.7 * width]
});
export const indeterScaleXInterpolation = {
  inputRange: [0, 0.5, 1],
  outputRange: [0.0001, INDETERMINATE_MAX_WIDTH, 0.0001]
};
export const returnTransXInterpolation = (width, isRTL) => ({
  inputRange: [0, 1],
  outputRange: [(isRTL ? 1 : -1) * 0.5 * width, 0]
});
export const scaleXInterpolation = {
  inputRange: [0, 1],
  outputRange: [0.0001, 1]
};
//# sourceMappingURL=config.js.map