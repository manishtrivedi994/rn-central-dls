import type BaseColors from '../../theme/color/base';
import { TextTokenV3 } from '../../typography/text';
export declare const VARIANT_STYLE_MAP: (themeColor: typeof BaseColors) => {
    GHOST: {
        DEFAULT: {
            fontColor: string;
        };
        PRESSED: {
            fontColor: string;
            backgroundColor: string;
        };
    };
    BRAND: {
        DEFAULT: {
            fontColor: string;
        };
        PRESSED: {
            fontColor: string;
        };
    };
    ACCENT: {
        DEFAULT: {
            fontColor: string;
        };
        PRESSED: {
            fontColor: string;
        };
    };
    BLACK: {
        DEFAULT: {
            fontColor: string;
        };
        PRESSED: {
            fontColor: string;
        };
    };
};
export declare const INVERSE_VARIANT_STYLE_MAP: (themeColor: typeof BaseColors) => {
    GHOST: {
        DEFAULT: {
            fontColor: string;
        };
        PRESSED: {
            fontColor: string;
        };
    };
    BRAND: {
        DEFAULT: {
            fontColor: string;
        };
        PRESSED: {
            fontColor: string;
        };
    };
    ACCENT: {
        DEFAULT: {
            fontColor: string;
        };
        PRESSED: {
            fontColor: string;
        };
    };
    BLACK: {
        DEFAULT: {
            fontColor: string;
        };
        PRESSED: {
            fontColor: string;
        };
    };
};
export declare const DISABLED: (themeColor: typeof BaseColors) => {
    fontColor: string;
};
export declare const TEXT_VARIANT_MAP: {
    SMALL: TextTokenV3;
    MEDIUM: TextTokenV3;
    LARGE: TextTokenV3;
    TINY: TextTokenV3;
};
//# sourceMappingURL=config.d.ts.map