/// <reference types="react" />
import type { CommonButtonProps } from '../../types/button';
export type ButtonVariants = 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'DESTRUCTIVE' | 'DARK';
export type ButtonProps = CommonButtonProps & {
    title: string;
    label?: string;
    type?: ButtonVariants;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    isBorderRounded?: boolean;
    onLongPress?: () => void;
    onPressIn?: () => void;
    onPressOut?: () => void;
    flipCaption?: boolean;
};
//# sourceMappingURL=types.d.ts.map