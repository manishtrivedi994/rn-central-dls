import React from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
export type BaseRatingProps = {
    count?: number;
    defaultRating?: number;
    onRatingChange?: (rating: number) => void;
    readonly?: boolean;
    size?: number;
    color?: string;
    activeColor?: string;
    disabled?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    layoutAnimation?: boolean;
};
declare const BaseRating: ({ count, defaultRating, onRatingChange, readonly, size, color, activeColor, disabled, containerStyle, layoutAnimation }: BaseRatingProps) => React.JSX.Element;
export default BaseRating;
//# sourceMappingURL=BaseRating.d.ts.map