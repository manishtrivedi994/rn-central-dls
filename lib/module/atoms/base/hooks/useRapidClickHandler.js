import { useCallback, useRef } from 'react';
export const DEFAULT_THROTTLE_TIME = 250;
const useRapidClickHandler = ({
  onPress,
  throttle = DEFAULT_THROTTLE_TIME
}) => {
  const isProcessingRef = useRef(false);
  const onRapidPressHandler = useCallback(() => {
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
export default useRapidClickHandler;
//# sourceMappingURL=useRapidClickHandler.js.map