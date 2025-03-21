import type BaseColors from '../../theme/color/base';
import { TextTokenV3 } from '../../typography/text/styles';
export declare const AnimationConfig: {
    defaultSwipePercentage: number;
    defaultSliderWidth: number;
    maximumTitleOpacity: number;
    minimumTitleOpacity: number;
    animationDuration: number;
    getBackAnimationDelay: number;
    defaultContainerSpacing: number;
};
export declare const VARIANT_STYLE_MAP: (themeColor: typeof BaseColors) => {
    EMERGENCY: {
        DEFAULT: {
            thumbStyle: {
                backgroundColor: string;
            };
            containerStyle: {
                backgroundColor: string;
            };
            thumbIconStyle: {
                color: string;
            };
            textStyle: {};
        };
        PRESSED: {
            thumbStyle: {
                backgroundColor: string;
            };
            containerStyle: {
                backgroundColor: string;
            };
            thumbIconStyle: {
                color: string;
            };
            textStyle: {};
        };
    };
    NORMAL: {
        DEFAULT: {
            thumbStyle: {
                backgroundColor: string;
            };
            containerStyle: {
                backgroundColor: string;
            };
            textStyle: {};
            thumbIconStyle: {
                color: string;
            };
        };
        PRESSED: {
            thumbStyle: {
                backgroundColor: string;
            };
            containerStyle: {
                backgroundColor: string;
            };
            textStyle: {};
            thumbIconStyle: {
                color: string;
            };
        };
    };
};
export declare const DISABLED: (themeColor: typeof BaseColors) => {
    containerStyle: {
        backgroundColor: string;
    };
    thumbStyle: {
        backgroundColor: string;
    };
    textStyle: {
        fontColor: string;
    };
    thumbIconStyle: {
        color: string;
    };
};
export declare const SIZE_VARIANT_MAP: {
    MEDIUM: {
        textStyle: {
            variant: TextTokenV3;
        };
        thumbStyle: {
            height: number;
            width: number;
        };
    };
    LARGE: {
        textStyle: {
            variant: TextTokenV3;
        };
        thumbStyle: {
            height: number;
            width: number;
        };
    };
};
//# sourceMappingURL=config.d.ts.map