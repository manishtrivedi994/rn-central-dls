import type { StyleProp, ViewStyle } from 'react-native';
export declare enum ProgressBarEnum {
    BOTTOM_CENTER = "BOTTOM_CENTER",
    BOTTOM_LEFT_RIGHT = "BOTTOM_LEFT_RIGHT",
    TOP_CENTER = "TOP_CENTER"
}
export type ProgressBarProps = {
    isIndetermined?: boolean;
    progressValue?: number;
    isRTL?: boolean;
    animationDuration?: number;
    progressTimeLeft?: string;
    showProgressPercent?: boolean;
    type?: ProgressBarEnum;
};
export type BottomLeftRightContentProps = {
    showProgressPercent?: boolean;
    st: {
        variantBottomLeftRight: StyleProp<ViewStyle>;
    };
    fontColor: string;
    progressValue?: number;
    progressTimeLeft?: string;
    type?: ProgressBarEnum;
};
export type CenterContentProps = {
    fontColor: string;
    progressValue?: number;
    fontStyle: StyleProp<ViewStyle>;
    type?: ProgressBarEnum;
};
//# sourceMappingURL=types.d.ts.map