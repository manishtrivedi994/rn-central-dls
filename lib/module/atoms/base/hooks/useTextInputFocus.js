import { useCallback, useState } from 'react';
export const useTextInputFocus = props => {
  const {
    onFocus,
    onBlur
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const _onFocus = useCallback(event => {
    setIsFocused(true);
    onFocus === null || onFocus === void 0 || onFocus(event);
  }, [onFocus]);
  const _onBlur = useCallback(event => {
    setIsFocused(false);
    onBlur === null || onBlur === void 0 || onBlur(event);
  }, [onBlur]);
  return {
    isFocused,
    _onBlur,
    _onFocus
  };
};
//# sourceMappingURL=useTextInputFocus.js.map