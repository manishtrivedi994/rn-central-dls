import { useCallback, useMemo, useState } from 'react';
import { useTheme } from '../../../theme/themeContext';
import { STATE_TYPE } from '../config';
import { STATE_TYPES } from '../types';
const useFileUploadStates = ({
  state
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
    const stateProps = STATE_TYPE(colors);
    if (isPressed && state !== STATE_TYPES.DISABLED) {
      return stateProps.PRESSED;
    }
    switch (state) {
      case STATE_TYPES.DISABLED:
        return stateProps.DISABLED;
      case STATE_TYPES.UPLOADING:
        return stateProps.UPLOADING;
      case STATE_TYPES.UPLOAD_FAILED:
        return stateProps.UPLOAD_FAILED;
      case STATE_TYPES.UPLOAD_COMPLETE:
        return stateProps.UPLOAD_COMPLETE;
      case STATE_TYPES.CUSTOM:
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
export default useFileUploadStates;
//# sourceMappingURL=useFileUploadStates.js.map