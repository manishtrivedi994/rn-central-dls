"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scaleXInterpolation = exports.returnTransXInterpolation = exports.returnIndeterTransXInterpolation = exports.indeterScaleXInterpolation = exports.INDETERMINATE_MAX_WIDTH = exports.INDETERMINATE_DURATION = void 0;
const INDETERMINATE_DURATION = exports.INDETERMINATE_DURATION = 2500;
const INDETERMINATE_MAX_WIDTH = exports.INDETERMINATE_MAX_WIDTH = 0.5;
const returnIndeterTransXInterpolation = (width, isRTL) => ({
  inputRange: [0, 0.5, 1],
  outputRange: [(isRTL ? 1 : -1) * 0.5 * width, (isRTL ? 1 : -1) * 0.5 * INDETERMINATE_MAX_WIDTH * width, (isRTL ? -1 : 1) * 0.7 * width]
});
exports.returnIndeterTransXInterpolation = returnIndeterTransXInterpolation;
const indeterScaleXInterpolation = exports.indeterScaleXInterpolation = {
  inputRange: [0, 0.5, 1],
  outputRange: [0.0001, INDETERMINATE_MAX_WIDTH, 0.0001]
};
const returnTransXInterpolation = (width, isRTL) => ({
  inputRange: [0, 1],
  outputRange: [(isRTL ? 1 : -1) * 0.5 * width, 0]
});
exports.returnTransXInterpolation = returnTransXInterpolation;
const scaleXInterpolation = exports.scaleXInterpolation = {
  inputRange: [0, 1],
  outputRange: [0.0001, 1]
};
//# sourceMappingURL=config.js.map