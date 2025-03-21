import type { StyleProp, ViewStyle } from 'react-native';
export type SizeVariants = 'SMALL' | 'MEDIUM';
export type TextState = 'EMPHASIS' | 'DEFAULT';
export type RadioButtonProps = {
    id?: string;
    checked?: boolean;
    size?: SizeVariants;
    onPress?: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    label?: string;
    textState?: TextState;
};
//# sourceMappingURL=types.d.ts.map