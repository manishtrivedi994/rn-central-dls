import { type PropsWithChildren } from 'react';
import BaseColors from './color/base';
import React from 'react';
export declare enum ModuleName {
    AUTOPILOT = "AUTOPILOT",
    BASE = "BASE",
    ORBIT = "ORBIT",
    NBFC = "NBFC"
}
export interface ThemeProps {
    colors: typeof BaseColors;
}
export declare const ThemeProvider: React.FC<PropsWithChildren & {
    appName: ModuleName;
}>;
export declare const withTheme: (appName: ModuleName, children: React.ReactElement) => React.JSX.Element;
export declare const useTheme: () => {
    colors: {
        bgFill: {
            defaultPrimary: string;
            defaultPrimaryII: string;
            defaultSecondary: string;
            defaultTertiary: string;
            defaultDisabled: string;
            defaultInverse: string;
            brand: string;
            brandSecondary: string;
            brandTertiary: string;
            brandHover: string;
            brandSecondaryHover: string;
            accent: string;
            accentSecondary: string;
            accentSecondaryII: string;
            accentTertiary: string;
            accentHover: string;
            accentSecondaryHover: string;
            stateError: string;
            stateErrorSecondary: string;
            stateErrorHover: string;
            stateErrorSecondaryHover: string;
            stateWarning: string;
            stateWarningSecondary: string;
            stateSuccess: string;
            stateSuccessSecondary: string;
            miscMagenta: string;
            miscMagentaSecondary: string;
            miscTeal: string;
            miscTealSecondary: string;
            miscPurple: string;
            miscPurpleSecondary: string;
            miscCrimson: string;
            miscCrimsonSecondary: string;
            translucentPrimary: string;
            translucentSecondary: string;
            translucentTertiary: string;
            miscGold: string;
            miscGoldSecondary: string;
            miscGoldTertiary: string;
            miscGoldHover: string;
            miscGoldSecondaryHover: string;
        };
        icon: {
            defaultPrimary: string;
            defaultSecondary: string;
            defaultTertiary: string;
            defaultDisabled: string;
            defaultInverse: string;
            brand: string;
            brandInverse: string;
            brandHover: string;
            accent: string;
            accentInverse: string;
            warning: string;
            warningInverse: string;
            error: string;
            errorInverse: string;
            success: string;
            successInverse: string;
            magenta: string;
            magentaInverse: string;
            teal: string;
            tealInverse: string;
            purple: string;
            purpleInverse: string;
            crimson: string;
            crimsonInverse: string;
            miscGold: string;
            miscGoldInverse: string;
        };
        border: {
            defaultPrimary: string;
            defaultSecondary: string;
            defaultBrand: string;
            defaultAccent: string;
            defaultDisabled: string;
            defaultWhite: string;
            defaultInverse: string;
            stateError: string;
            stateWarning: string;
            stateSuccess: string;
            miscMagenta: string;
            miscTeal: string;
            miscPurple: string;
            miscCrimson: string;
            miscGold: string;
        };
        text: {
            defaultPrimary: string;
            defaultSecondary: string;
            defaultTertiary: string;
            defaultDisabled: string;
            defaultInverse: string;
            brand: string;
            brandInverse: string;
            brandHover: string;
            brandAccent: string;
            brandAccentInverse: string;
            stateWarning: string;
            stateWarningInverse: string;
            stateError: string;
            stateErrorInverse: string;
            stateSuccess: string;
            stateSuccessInverse: string;
            miscMagenta: string;
            miscMagentaInverse: string;
            miscTeal: string;
            miscTealInverse: string;
            miscPurple: string;
            miscPurpleInverse: string;
            miscCrimson: string;
            miscCrimsonInverse: string;
            miscGold: string;
            miscGoldInverse: string;
        };
        bgSurface: {
            defaultPrimary: string;
            defaultSecondary: string;
            defaultDisabled: string;
            defaultInverse: string;
            brand: string;
            accent: string;
            stateError: string;
            stateWarning: string;
            stateSuccess: string;
            miscMagenta: string;
            miscTeal: string;
            miscPurple: string;
            miscCrimson: string;
            overlayPrimary: string;
            miscGold: string;
        };
    } | {
        bgFill: {
            defaultPrimaryII: string;
            brand: string;
            brandSecondary: string;
            brandSecondaryHover: string;
            brandHover: string;
            defaultPrimary: string;
            defaultSecondary: string;
            defaultTertiary: string;
            defaultDisabled: string;
            defaultInverse: string;
            accent: string;
            accentHover: string;
            stateWarning: string;
            stateWarningSecondary: string;
            stateSuccess: string;
            accentSecondaryII: string;
            brandTertiary: string;
            accentSecondary: string;
            accentTertiary: string;
            accentSecondaryHover: string;
            stateError: string;
            stateErrorSecondary: string;
            stateErrorHover: string;
            stateErrorSecondaryHover: string;
            stateSuccessSecondary: string;
            miscMagenta: string;
            miscMagentaSecondary: string;
            miscTeal: string;
            miscTealSecondary: string;
            miscPurple: string;
            miscPurpleSecondary: string;
            miscCrimson: string;
            miscCrimsonSecondary: string;
            translucentPrimary: string;
            translucentSecondary: string;
            translucentTertiary: string;
            miscGold: string;
            miscGoldSecondary: string;
            miscGoldTertiary: string;
            miscGoldHover: string;
            miscGoldSecondaryHover: string;
        };
        bgSurface: {
            defaultInverse: string;
            brand: string;
            accent: string;
            stateWarning: string;
            overlayPrimary: string;
            defaultPrimary: string;
            defaultSecondary: string;
            defaultDisabled: string;
            stateError: string;
            stateSuccess: string;
            miscMagenta: string;
            miscTeal: string;
            miscPurple: string;
            miscCrimson: string;
            miscGold: string;
        };
        text: {
            defaultPrimary: string;
            defaultSecondary: string;
            defaultDisabled: string;
            defaultInverse: string;
            brand: string;
            brandInverse: string;
            brandHover: string;
            brandAccent: string;
            stateWarning: string;
            stateError: string;
            stateSuccess: string;
            defaultTertiary: string;
            brandAccentInverse: string;
            stateWarningInverse: string;
            stateErrorInverse: string;
            stateSuccessInverse: string;
            miscMagenta: string;
            miscMagentaInverse: string;
            miscTeal: string;
            miscTealInverse: string;
            miscPurple: string;
            miscPurpleInverse: string;
            miscCrimson: string;
            miscCrimsonInverse: string;
            miscGold: string;
            miscGoldInverse: string;
        };
        border: {
            defaultPrimary: string;
            defaultBrand: string;
            defaultAccent: string;
            defaultDisabled: string;
            stateWarning: string;
            stateSuccess: string;
            defaultSecondary: string;
            defaultWhite: string;
            defaultInverse: string;
            stateError: string;
            miscMagenta: string;
            miscTeal: string;
            miscPurple: string;
            miscCrimson: string;
            miscGold: string;
        };
        icon: {
            defaultPrimary: string;
            defaultSecondary: string;
            defaultDisabled: string;
            defaultInverse: string;
            brand: string;
            brandInverse: string;
            brandHover: string;
            accent: string;
            accentInverse: string;
            warning: string;
            success: string;
            defaultTertiary: string;
            warningInverse: string;
            error: string;
            errorInverse: string;
            successInverse: string;
            magenta: string;
            magentaInverse: string;
            teal: string;
            tealInverse: string;
            purple: string;
            purpleInverse: string;
            crimson: string;
            crimsonInverse: string;
            miscGold: string;
            miscGoldInverse: string;
        };
    } | {
        bgFill: {
            defaultSecondary: string;
            defaultTertiary: string;
            brand: string;
            brandSecondary: string;
            brandHover: string;
            brandSecondaryHover: string;
            accent: string;
            accentSecondary: string;
            accentTertiary: string;
            accentHover: string;
            accentSecondaryHover: string;
            translucentPrimary: string;
            translucentSecondary: string;
            translucentTertiary: string;
            defaultPrimary: string;
            defaultPrimaryII: string;
            defaultDisabled: string;
            defaultInverse: string;
            brandTertiary: string;
            accentSecondaryII: string;
            stateError: string;
            stateErrorSecondary: string;
            stateErrorHover: string;
            stateErrorSecondaryHover: string;
            stateWarning: string;
            stateWarningSecondary: string;
            stateSuccess: string;
            stateSuccessSecondary: string;
            miscMagenta: string;
            miscMagentaSecondary: string;
            miscTeal: string;
            miscTealSecondary: string;
            miscPurple: string;
            miscPurpleSecondary: string;
            miscCrimson: string;
            miscCrimsonSecondary: string;
            miscGold: string;
            miscGoldSecondary: string;
            miscGoldTertiary: string;
            miscGoldHover: string;
            miscGoldSecondaryHover: string;
        };
        bgSurface: {
            overlayPrimary: string;
            defaultPrimary: string;
            defaultSecondary: string;
            defaultDisabled: string;
            defaultInverse: string;
            brand: string;
            accent: string;
            stateError: string;
            stateWarning: string;
            stateSuccess: string;
            miscMagenta: string;
            miscTeal: string;
            miscPurple: string;
            miscCrimson: string;
            miscGold: string;
        };
        text: {
            defaultPrimary: string;
            brand: string;
            brandHover: string;
            brandAccent: string;
            defaultSecondary: string;
            defaultTertiary: string;
            defaultDisabled: string;
            defaultInverse: string;
            brandInverse: string;
            brandAccentInverse: string;
            stateWarning: string;
            stateWarningInverse: string;
            stateError: string;
            stateErrorInverse: string;
            stateSuccess: string;
            stateSuccessInverse: string;
            miscMagenta: string;
            miscMagentaInverse: string;
            miscTeal: string;
            miscTealInverse: string;
            miscPurple: string;
            miscPurpleInverse: string;
            miscCrimson: string;
            miscCrimsonInverse: string;
            miscGold: string;
            miscGoldInverse: string;
        };
        border: {
            defaultBrand: string;
            defaultAccent: string;
            defaultPrimary: string;
            defaultSecondary: string;
            defaultDisabled: string;
            defaultWhite: string;
            defaultInverse: string;
            stateError: string;
            stateWarning: string;
            stateSuccess: string;
            miscMagenta: string;
            miscTeal: string;
            miscPurple: string;
            miscCrimson: string;
            miscGold: string;
        };
        icon: {
            defaultPrimary: string;
            brand: string;
            brandHover: string;
            accent: string;
            defaultSecondary: string;
            defaultTertiary: string;
            defaultDisabled: string;
            defaultInverse: string;
            brandInverse: string;
            accentInverse: string;
            warning: string;
            warningInverse: string;
            error: string;
            errorInverse: string;
            success: string;
            successInverse: string;
            magenta: string;
            magentaInverse: string;
            teal: string;
            tealInverse: string;
            purple: string;
            purpleInverse: string;
            crimson: string;
            crimsonInverse: string;
            miscGold: string;
            miscGoldInverse: string;
        };
    } | typeof import("./color/base");
    gradientColor: {
        bgFill: {
            primary: string[];
            accentVertical: string[];
            accentVerticalInverse: string[];
            accentFadeSubtle: string[];
        };
        border: {
            accentVertical: string[];
            accentVerticalInverse: string[];
            primaryHorizontal: string[];
            secondaryHorizontal: string[];
            brandFadeSubtle: string[];
            accentFade: string[];
        };
        divider: {
            brandFadeHorizontal: string[];
            neutralFadeVertical: string[];
        };
    };
    sizes: {
        IconSize: {
            iconSize12: number;
            iconSize14: number;
            iconSize16: number;
            iconSize20: number;
            iconSize24: number;
            iconSize32: number;
            iconSize40: number;
            iconSize48: number;
        };
        CornerRadius: {
            cornerRadius0: number;
            cornerRadius4: number;
            cornerRadius8: number;
            cornerRadius12: number;
            cornerRadius16: number;
            cornerRadiusFull: number;
        };
        Size: {
            size4: number;
            size8: number;
            size10: number;
            size16: number;
            size20: number;
            size22: number;
            size24: number;
            size28: number;
            size32: number;
            size34: number;
            size36: number;
            size38: number;
            size40: number;
            size44: number;
            size48: number;
            size58: number;
            size160: number;
        };
        Space: {
            space0: number;
            space2: number;
            space4: number;
            space6: number;
            space8: number;
            space10: number;
            space12: number;
            space16: number;
            space20: number;
            space24: number;
            space32: number;
        };
    };
    module: ModuleName;
};
export default withTheme;
//# sourceMappingURL=themeContext.d.ts.map