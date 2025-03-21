import React from 'react';
import type { SizeVariants, TypeVariants } from './types';
type Props = {
    title: string;
    onSwipeEnd: () => void;
    onSwipeStart?: () => void;
    size?: SizeVariants;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: TypeVariants;
};
declare const SlideButton: React.MemoExoticComponent<({ onSwipeEnd, title, size, isLoading, disabled, variant, onSwipeStart, }: Props) => React.JSX.Element>;
export { SlideButton };
//# sourceMappingURL=index.d.ts.map