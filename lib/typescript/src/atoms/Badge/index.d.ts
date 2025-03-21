import React from 'react';
import { type BadgeCorner, type BadgeState, type BadgeTextState, type BadgeType, type BadgeVariants } from './config';
export type BadgeProps = {
    type?: BadgeType;
    variant?: BadgeVariants;
    state?: BadgeState;
    text: string;
    icon?: React.ReactElement;
    corner?: BadgeCorner;
    border?: boolean;
    textState?: BadgeTextState;
};
export declare const Badge: React.NamedExoticComponent<BadgeProps>;
//# sourceMappingURL=index.d.ts.map