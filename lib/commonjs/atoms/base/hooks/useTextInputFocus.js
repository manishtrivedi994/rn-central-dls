"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTextInputFocus = void 0;
var _react = require("react");
const useTextInputFocus = props => {
  const {
    onFocus,
    onBlur
  } = props;
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const _onFocus = (0, _react.useCallback)(event => {
    setIsFocused(true);
    onFocus === null || onFocus === void 0 || onFocus(event);
  }, [onFocus]);
  const _onBlur = (0, _react.useCallback)(event => {
    setIsFocused(false);
    onBlur === null || onBlur === void 0 || onBlur(event);
  }, [onBlur]);
  return {
    isFocused,
    _onBlur,
    _onFocus
  };
};
exports.useTextInputFocus = useTextInputFocus;
//# sourceMappingURL=useTextInputFocus.js.map