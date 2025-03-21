import type { StyleProp, ViewStyle } from 'react-native';
import type BaseColors from '../../theme/color/base';
export type SizeVariants = 'SMALL' | 'MEDIUM' | 'LARGE';
export declare enum SizeEnum {
    SMALL = 12,
    MEDIUM = 20,
    LARGE = 32
}
export type RatingComponentProps = {
    size?: SizeVariants;
    count: number;
    defaultRating?: number;
    onRatingChange?: (rating: number) => void;
    readonly?: boolean;
    disabled?: boolean;
    layoutAnimation?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
};
export type GetStylesType = {
    colors: typeof BaseColors;
    disabled?: boolean;
};
//# sourceMappingURL=types.d.ts.map