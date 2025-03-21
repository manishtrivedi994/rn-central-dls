/// <reference types="react" />
import type { CommonButtonProps } from '../../types/button';
export type ButtonTypeVariants = 'WITH_BG' | 'WITHOUT_BG' | 'INVERSE';
export type ButtonVariants = 'ROUND' | 'SQUARE';
export type IconButtonProps = CommonButtonProps & {
    icon?: React.ReactElement;
    type: ButtonTypeVariants;
    variant?: ButtonVariants;
};
//# sourceMappingURL=types.d.ts.map