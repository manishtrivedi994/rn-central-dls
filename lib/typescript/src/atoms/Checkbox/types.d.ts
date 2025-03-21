export type SizeVariants = 'SMALL' | 'MEDIUM';
export type CheckboxType = 'SQUARE' | 'CIRCLE';
export type IconType = 'SMALL_ICON' | 'MEDIUM_ICON';
export type TextState = 'EMPHASIS' | 'DEFAULT';
export type CheckboxProps = {
    checked?: boolean;
    size?: SizeVariants;
    onPress?: () => void;
    disabled?: boolean;
    indeterminate?: boolean;
    type?: CheckboxType;
    label?: string;
    textState?: TextState;
};
//# sourceMappingURL=types.d.ts.map