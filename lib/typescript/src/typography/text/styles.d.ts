import type { TextStyle } from 'react-native';
export declare enum FONT_SIZE {
    xxs = 8,
    xs = 10,
    s = 12,
    m = 14,
    l = 16,
    xl = 18,
    xxl = 20,
    xxxl = 24,
    xxxxl = 28,
    xxxxxl = 32,
    xxxxxxl = 36
}
export declare enum LINE_HEIGHT {
    xs = 12,
    s = 14,
    m = 16,
    l = 18,
    xl = 20,
    xxl = 22,
    xxxl = 24,
    xxxxl = 28,
    xxxxxl = 34,
    xxxxxxl = 38,
    xxxxxxxl = 44
}
export declare enum FONT_TYPE {
    Bold = "Bold",
    Medium = "Medium",
    SemiBold = "SemiBold",
    Regular = "Regular",
    BoldItalic = "BoldItalic",
    MediumItalic = "MediumItalic",
    SemiBoldItalic = "SemiBoldItalic",
    RegularItalic = "RegularItalic"
}
export type FontProps = {
    [type in FONT_TYPE]: string;
};
declare const Font: FontProps;
/**@deprecated
 * use TextTokenV3 instead
 *
 */
declare enum TextToken {
    display_bold = 0,
    display1_semibold = 1,
    heading1_bold = 2,
    heading1_semibold = 3,
    heading2_bold = 4,
    heading2_semibold = 5,
    heading3_bold = 6,
    heading3_semibold = 7,
    heading4_bold = 8,
    heading4_semibold = 9,
    label1_semibold = 10,
    label1_medium = 11,
    label1_regular = 12,
    label2_semibold = 13,
    label2_medium = 14,
    label2_regular = 15,
    label3_bold = 16,
    label3_semibold = 17,
    label3_medium = 18,
    label3_regular = 19,
    label4_semibold = 20,
    label4_medium = 21,
    label4_regular = 22,
    body1_semibold = 23,
    body1_regular = 24,
    body2_semibold = 25,
    body2_regular = 26,
    body3_semibold = 27,
    body3_regular = 28,
    tiny_regular = 29,
    tiny_medium = 30,
    tiny_semibold = 31,
    tiny_bold = 32,
    tiny_uppercase = 33
}
export declare enum FontSizeV3 {
    FontSize900 = 40,
    FontSize850 = 38,
    FontSize800 = 36,
    FontSize750 = 32,
    FontSize700 = 30,
    FontSize650 = 28,
    FontSize600 = 24,
    FontSize550 = 22,
    FontSize500 = 20,
    FontSize450 = 18,
    FontSize400 = 16,
    FontSize350 = 16,
    FontSize300 = 16,
    FontSize250 = 14,
    FontSize200 = 12,
    FontSize150 = 10
}
export declare enum LineHeightV3 {
    LineHeight900 = 40,
    LineHeight850 = 38,
    LineHeight800 = 36,
    LineHeight750 = 32,
    LineHeight700 = 36,
    LineHeight650 = 34,
    LineHeight600 = 29,
    LineHeight550 = 29,
    LineHeight500 = 26,
    LineHeight450 = 23,
    LineHeight400 = 21,
    LineHeight350 = 23,
    LineHeight300 = 24,
    LineHeight250 = 20,
    LineHeight200 = 17,
    LineHeight150 = 15
}
declare enum TextTokenV3 {
    bold_900 = "bold_900",
    semibold_900 = "semibold_900",
    bold_850 = "bold_850",
    semibold_850 = "semibold_850",
    bold_800 = "bold_800",
    semibold_800 = "semibold_800",
    bold_750 = "bold_750",
    semibold_750 = "semibold_750",
    bold_700 = "bold_700",
    semibold_700 = "semibold_700",
    bold_650 = "bold_650",
    semibold_650 = "semibold_650",
    bold_600 = "bold_600",
    semibold_600 = "semibold_600",
    bold_550 = "bold_550",
    semibold_550 = "semibold_550",
    medium_550 = "medium_550",
    regular_550 = "regular_550",
    bold_500 = "bold_500",
    semibold_500 = "semibold_500",
    medium_500 = "medium_500",
    regular_500 = "regular_500",
    bold_450 = "bold_450",
    semibold_450 = "semibold_450",
    medium_450 = "medium_450",
    regular_450 = "regular_450",
    bold_400 = "bold_400",
    semibold_400 = "semibold_400",
    medium_400 = "medium_400",
    regular_400 = "regular_400",
    bold_350 = "bold_350",
    semibold_350 = "semibold_350",
    medium_350 = "medium_350",
    regular_350 = "regular_350",
    bold_300 = "bold_300",
    semibold_300 = "semibold_300",
    medium_300 = "medium_300",
    regular_300 = "regular_300",
    bold_250 = "bold_250",
    semibold_250 = "semibold_250",
    medium_250 = "medium_250",
    regular_250 = "regular_250",
    bold_200 = "bold_200",
    semibold_200 = "semibold_200",
    medium_200 = "medium_200",
    regular_200 = "regular_200",
    bold_150 = "bold_150",
    semibold_150 = "semibold_150",
    medium_150 = "medium_150",
    regular_150 = "regular_150"
}
export type TextVariantProps = {
    [key in TextToken | TextTokenV3]: TextStyle;
};
declare const getTextVariants: ({ italic }: {
    italic?: boolean;
}) => {
    0: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
        letterSpacing: number;
    };
    1: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
        letterSpacing: number;
    };
    2: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    3: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    4: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    5: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    6: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    7: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    8: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    9: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    10: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    11: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    12: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    13: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    14: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    15: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    17: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    16: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    18: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    19: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    20: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    21: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    22: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    23: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    24: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    25: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    26: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    27: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    28: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    29: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    30: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    31: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    32: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
    };
    33: {
        fontSize: FONT_SIZE;
        lineHeight: LINE_HEIGHT;
        fontFamily: string;
        textTransform: "uppercase";
    };
    bold_900: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_900: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_850: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_850: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_800: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_800: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_750: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_750: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_700: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_700: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_650: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_650: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_600: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_600: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_550: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_550: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    medium_550: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    regular_550: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_500: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_500: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    medium_500: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    regular_500: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_450: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_450: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    medium_450: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    regular_450: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_400: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_400: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    medium_400: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    regular_400: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_350: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_350: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    medium_350: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    regular_350: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_300: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_300: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    medium_300: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    regular_300: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_250: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_250: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    medium_250: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    regular_250: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_200: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_200: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    medium_200: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    regular_200: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    bold_150: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    semibold_150: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    medium_150: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
    regular_150: {
        fontSize: FontSizeV3;
        fontFamily: string;
        lineHeight: LineHeightV3;
    };
};
declare const TextVariants: TextVariantProps;
export { TextVariants, TextToken, Font, TextTokenV3, getTextVariants };
//# sourceMappingURL=styles.d.ts.map