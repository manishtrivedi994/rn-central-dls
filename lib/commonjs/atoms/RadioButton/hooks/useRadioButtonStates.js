"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _themeContext = require("../../../theme/themeContext");
var _config = require("../config");
const useRadioButtonStates = ({
  disabled,
  checked,
  size = 'SMALL',
  textState = 'EMPHASIS'
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
    if (disabled) {
      return (0, _config.DISABLED)(colors);
    } else if (checked && isPressed) {
      return (0, _config.PRESSED)(colors);
    } else if (checked) {
      return (0, _config.CHECKED)(colors);
    }
    return (0, _config.DEFAULT)(colors);
  }, [colors, disabled, isPressed, checked]);
  const textVariant = _config.TEXT_VARIANT_MAP[size][textState];
  return {
    onPressIn,
    onPressOut,
    customStyles,
    textVariant
  };
};
var _default = exports.default = useRadioButtonStates;
//# sourceMappingURL=useRadioButtonStates.js.map