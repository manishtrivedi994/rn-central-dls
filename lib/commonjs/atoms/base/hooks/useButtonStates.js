"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _themeContext = require("../../../theme/themeContext");
const BORDER_VISIBLE_MAP = {
  PRIMARY: {
    showBorder: true
  },
  SECONDARY: {
    showBorder: true
  },
  DESTRUCTIVE: {
    showBorder: false
  },
  TERTIARY: {
    showBorder: false
  },
  DARK: {
    showBorder: false
  }
};
const isShowBorder = (module, type) => {
  var _BORDER_VISIBLE_MAP$t;
  return module === _themeContext.ModuleName.ORBIT && !!((_BORDER_VISIBLE_MAP$t = BORDER_VISIBLE_MAP[type]) !== null && _BORDER_VISIBLE_MAP$t !== void 0 && _BORDER_VISIBLE_MAP$t.showBorder);
};
const useButtonStates = ({
  VARIANT_STYLE_MAP,
  DISABLED_STYLE,
  TEXT_VARIANT_MAP,
  disabled,
  isLoading,
  type,
  size = 'MEDIUM'
}) => {
  const {
    colors,
    module,
    sizes
  } = (0, _themeContext.useTheme)();
  const [isPressed, setIsPressed] = (0, _react.useState)(false);
  const onPressInHandler = (0, _react.useCallback)(() => {
    setIsPressed(true);
  }, []);
  const onPressOutHandler = (0, _react.useCallback)(() => {
    setIsPressed(false);
  }, []);
  const customStyles = (0, _react.useMemo)(() => {
    const stateProps = VARIANT_STYLE_MAP(colors)[type];
    if (disabled) {
      return DISABLED_STYLE(colors, type);
    } else if (isLoading) {
      return stateProps.DEFAULT;
    } else if (isPressed) {
      return stateProps.PRESSED;
    }
    return stateProps.DEFAULT;
  }, [colors, disabled, isLoading, type, isPressed, DISABLED_STYLE, VARIANT_STYLE_MAP]);
  const textVariant = TEXT_VARIANT_MAP[size];
  return {
    onPressInHandler,
    onPressOutHandler,
    customStyles,
    textVariant,
    sizes,
    showBorder: isShowBorder(module, type)
  };
};
var _default = exports.default = useButtonStates;
//# sourceMappingURL=useButtonStates.js.map