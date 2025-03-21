import React from 'react';
import type BaseColors from '../../theme/color/base';
import type { StyleProp, ViewStyle } from 'react-native';
import { TextToken } from '../../typography/text';
export type BadgeType = 'dark' | 'light';
export type BadgeState = 'active' | 'disabled';
export declare enum BadgeVariantsEnum {
    grey = "grey",
    success = "success",
    accent = "accent",
    warning = "warning",
    error = "error",
    purple = "purple",
    magenta = "magenta",
    crimson = "crimson",
    neutral = "neutral"
}
export type BadgeVariants = keyof typeof BadgeVariantsEnum;
export type BadgeCorner = 'left' | 'right';
export type BadgeTextState = 'primary' | 'secondary';
export type Config = {
    [key in BadgeVariantsEnum]: {
        backgroundColor: string;
        textColor: string;
        borderColor: string;
        icon?: () => React.JSX.Element;
    };
};
export type fetchBadgeStylingBasedOnPropsParam = {
    type: BadgeType;
    variant: BadgeVariants;
    state: BadgeState;
    colors: typeof BaseColors;
    corner?: BadgeCorner;
    border: boolean;
    textState?: BadgeTextState;
};
export declare const fetchBadgeStylingBasedOnProps: ({ type, variant, state, colors, corner, border, textState, }: fetchBadgeStylingBasedOnPropsParam) => {
    icon: (() => React.JSX.Element) | undefined;
    textColor: string;
    containerStyle: StyleProp<ViewStyle>;
    textVariant: TextToken.tiny_regular | TextToken.tiny_medium | TextToken.tiny_uppercase;
};
//# sourceMappingURL=config.d.ts.map