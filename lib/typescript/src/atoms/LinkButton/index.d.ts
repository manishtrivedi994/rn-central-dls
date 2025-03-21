import React from 'react';
import type { LinkButtonProps } from '../../types/button';
import type { ButtonVariants } from './type';
type Props = LinkButtonProps & {
    title: string;
    type?: ButtonVariants;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    underline?: boolean;
    inverse?: boolean;
};
declare const LinkButton: React.MemoExoticComponent<({ title, type, disabled, isLoading, size, underline, inverse, ...props }: Props) => React.JSX.Element>;
export { LinkButton };
//# sourceMappingURL=index.d.ts.map