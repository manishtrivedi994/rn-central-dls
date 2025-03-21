import type { StyleProp, ViewStyle, Insets } from 'react-native';
export type SizeVariants = 'SMALL' | 'LARGE' | 'MEDIUM';
export type LinkButtonSizeVariants = SizeVariants | 'TINY';
interface GenericButtonProps<T> {
    size?: T;
    isLoading?: boolean;
    onPress?: () => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    throttle?: number;
    hitSlop?: null | Insets | number | undefined;
}
export type CommonButtonProps = GenericButtonProps<SizeVariants>;
export type LinkButtonProps = GenericButtonProps<LinkButtonSizeVariants>;
export {};
//# sourceMappingURL=button.d.ts.map