import { useCallback, useMemo, useState } from 'react';
import { ModuleName, useTheme } from '../../../theme/themeContext';
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
  return module === ModuleName.ORBIT && !!((_BORDER_VISIBLE_MAP$t = BORDER_VISIBLE_MAP[type]) !== null && _BORDER_VISIBLE_MAP$t !== void 0 && _BORDER_VISIBLE_MAP$t.showBorder);
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
  } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  const onPressInHandler = useCallback(() => {
    setIsPressed(true);
  }, []);
  const onPressOutHandler = useCallback(() => {
    setIsPressed(false);
  }, []);
  const customStyles = useMemo(() => {
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
export default useButtonStates;
//# sourceMappingURL=useButtonStates.js.map