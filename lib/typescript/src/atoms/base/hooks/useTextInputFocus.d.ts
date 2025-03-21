import type { NativeSyntheticEvent, TextInputFocusEventData, TextInputProps } from 'react-native';
export declare const useTextInputFocus: (props: Omit<TextInputProps, 'placeholder'>) => {
    isFocused: boolean;
    _onBlur: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    _onFocus: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};
//# sourceMappingURL=useTextInputFocus.d.ts.map