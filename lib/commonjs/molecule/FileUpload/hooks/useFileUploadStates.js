"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _themeContext = require("../../../theme/themeContext");
var _config = require("../config");
var _types = require("../types");
const useFileUploadStates = ({
  state
}) => {
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const [isPressed, setIsPressed] = (0, _react.useState)(false);
  const onPressIn = (0, _react.useCallback)(() => {
    setIsPressed(true);
  }, []);
  const onPressOut = (0, _react.useCallback)(() => {
    setIsPressed(false);
  }, []);
  const customStyles = (0, _react.useMemo)(() => {
    const stateProps = (0, _config.STATE_TYPE)(colors);
    if (isPressed && state !== _types.STATE_TYPES.DISABLED) {
      return stateProps.PRESSED;
    }
    switch (state) {
      case _types.STATE_TYPES.DISABLED:
        return stateProps.DISABLED;
      case _types.STATE_TYPES.UPLOADING:
        return stateProps.UPLOADING;
      case _types.STATE_TYPES.UPLOAD_FAILED:
        return stateProps.UPLOAD_FAILED;
      case _types.STATE_TYPES.UPLOAD_COMPLETE:
        return stateProps.UPLOAD_COMPLETE;
      case _types.STATE_TYPES.CUSTOM:
        return stateProps.CUSTOM;
      default:
        return stateProps.DEFAULT;
    }
  }, [state, colors, isPressed]);
  return {
    onPressIn,
    onPressOut,
    customStyles
  };
};
var _default = exports.default = useFileUploadStates;
//# sourceMappingURL=useFileUploadStates.js.map