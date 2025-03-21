import { useCallback, useMemo, useState } from 'react';
import { useTheme } from '../../../theme/themeContext';
import { CHECKED, DEFAULT, DISABLED, PRESSED, TEXT_VARIANT_MAP } from '../config';
const useCheckboxStates = ({
  disabled,
  checked,
  indeterminate,
  size = 'SMALL',
  textState = 'DEFAULT'
}) => {
  const {
    colors
  } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  const onPressIn = useCallback(() => {
    setIsPressed(true);
  }, []);
  const onPressOut = useCallback(() => {
    setIsPressed(false);
  }, []);
  const customStyles = useMemo(() => {
    if (disabled) {
      return DISABLED(colors);
    } else if ((checked || indeterminate) && isPressed) {
      return PRESSED(colors);
    } else if (checked || indeterminate) {
      return CHECKED(colors);
    }
    return DEFAULT(colors);
  }, [colors, disabled, isPressed, checked, indeterminate]);
  const textVariant = TEXT_VARIANT_MAP[size][textState];
  return {
    onPressIn,
    onPressOut,
    customStyles,
    textVariant
  };
};
export default useCheckboxStates;
//# sourceMappingURL=useCheckboxStates.js.map