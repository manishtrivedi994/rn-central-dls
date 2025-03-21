"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _themeContext = require("../../../theme/themeContext");
var _config = require("../config");
const useCheckboxStates = ({
  disabled,
  checked,
  indeterminate,
  size = 'SMALL',
  textState = 'DEFAULT'
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
    } else if ((checked || indeterminate) && isPressed) {
      return (0, _config.PRESSED)(colors);
    } else if (checked || indeterminate) {
      return (0, _config.CHECKED)(colors);
    }
    return (0, _config.DEFAULT)(colors);
  }, [colors, disabled, isPressed, checked, indeterminate]);
  const textVariant = _config.TEXT_VARIANT_MAP[size][textState];
  return {
    onPressIn,
    onPressOut,
    customStyles,
    textVariant
  };
};
var _default = exports.default = useCheckboxStates;
//# sourceMappingURL=useCheckboxStates.js.map