"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULT_THROTTLE_TIME = void 0;
var _react = require("react");
const DEFAULT_THROTTLE_TIME = exports.DEFAULT_THROTTLE_TIME = 250;
const useRapidClickHandler = ({
  onPress,
  throttle = DEFAULT_THROTTLE_TIME
}) => {
  const isProcessingRef = (0, _react.useRef)(false);
  const onRapidPressHandler = (0, _react.useCallback)(() => {
    if (isProcessingRef.current || !onPress) return; // Prevent further clicks if already processing
    isProcessingRef.current = true;
    onPress();
    setTimeout(() => {
      isProcessingRef.current = false; // Re-enable the button after the operation is complete
    }, throttle);
  }, [onPress, throttle]);
  return {
    onRapidPressHandler
  };
};
var _default = exports.default = useRapidClickHandler;
//# sourceMappingURL=useRapidClickHandler.js.map