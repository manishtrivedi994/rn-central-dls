import { useCallback, useMemo, useState } from 'react';
import { useTheme } from '../../../theme/themeContext';
import { CHECKED, DEFAULT, DISABLED, PRESSED, TEXT_VARIANT_MAP } from '../config';
const useRadioButtonStates = ({
  disabled,
  checked,
  size = 'SMALL',
  textState = 'EMPHASIS'
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
    } else if (checked && isPressed) {
      return PRESSED(colors);
    } else if (checked) {
      return CHECKED(colors);
    }
    return DEFAULT(colors);
  }, [colors, disabled, isPressed, checked]);
  const textVariant = TEXT_VARIANT_MAP[size][textState];
  return {
    onPressIn,
    onPressOut,
    customStyles,
    textVariant
  };
};
export default useRadioButtonStates;
//# sourceMappingURL=useRadioButtonStates.js.map