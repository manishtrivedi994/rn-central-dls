import type { StyleProp, ViewStyle } from 'react-native';
import type BaseColors from '../../theme/color/base';
export type SizeVariants = "SMALL" | "LARGE" | "MEDIUM";
export declare enum AppearanceEnum {
    /**
     * @deprecated
     * use only
     * GREY, BLUE, ORANGE, RED, GREEN, DISABLED
     */
    PRIMARY = "PRIMARY",
    /**
     * @deprecated
     * use only
     * GREY, BLUE, ORANGE, RED, GREEN, DISABLED
     */
    SECONDARY = "SECONDARY",
    /**
     * @deprecated
     * use only
     * GREY, BLUE, ORANGE, RED, GREEN, DISABLED
     */
    TERTIARY = "TERTIARY",
    /**
     * @deprecated
     * use only
     * GREY, BLUE, ORANGE, RED, GREEN, DISABLED
     */
    IMPORTANT = "IMPORTANT",
    /**
     * @deprecated
     * use only
     * GREY, BLUE, ORANGE, RED, GREEN, DISABLED
     */
    ADDED = "ADDED",
    /**
     * @deprecated
     * use only
     * GREY, BLUE, ORANGE, RED, GREEN, DISABLED
     */
    REMOVED = "REMOVED",
    /**
     * @deprecated
     * use only
     * GREY, BLUE, ORANGE, RED, GREEN, DISABLED
     */
    INVERSE = "INVERSE",
    GREY = "GREY",
    BLUE = "BLUE",
    ORANGE = "ORANGE",
    RED = "RED",
    GREEN = "GREEN",
    DISABLED = "DISABLED"
}
export declare enum BG {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    INVERSE = "INVERSE"
}
export type TagsComponentProps = {
    style?: StyleProp<ViewStyle>;
    appearance: AppearanceEnum;
    /**
     * @deprecated
     * Use `label` instead.
     */
    tagsCount?: number;
    label: string | number;
    size?: SizeVariants;
    bg?: keyof typeof BG;
};
export type GetStylesType = {
    colors: typeof BaseColors;
    appearance: AppearanceEnum;
    bg: keyof typeof BG;
};
//# sourceMappingURL=types.d.ts.map