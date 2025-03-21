import React from 'react';
import type BaseColors from '../../theme/color/base';
export declare const HEIGHT = 44;
export declare const MAX_INPUT_HEIGHT = 80;
export declare const NUMBER_REGEX: RegExp;
export declare const BHARAT_NUMBER_REGEX: RegExp;
export declare const NEW_NUMBER_REGEX: RegExp;
export declare const MOBILE_NUMBER_REGEX_2: RegExp;
export declare const ALPHA_NUMERIC_SPACE_REGEX: RegExp;
export declare const isValidRegNo: (_value?: string) => boolean;
export declare const TEXT_PROP_MAP: ({ colors, focused, inverse, value, }: {
    colors: typeof BaseColors;
    focused: boolean;
    inverse: boolean;
    value?: string;
}) => {
    VEHICLE_NO: {
        formatter: (regNo: string) => string;
        unformatter: (regNo: string) => string;
        prefix: string;
        placeholder: string;
        maxLength: number;
        checkValidity: (_value?: string) => boolean;
        showSeparator: boolean;
    };
    TEXT: {
        formatter: (text: string) => string;
        unformatter: (text: string) => string;
        prefix: string;
        placeholder: undefined;
        maxLength: undefined;
        checkValidity: (_text: string) => boolean;
        showSeparator: boolean;
    };
    MULTILINE: {
        formatter: (text: string) => string;
        unformatter: (text: string) => string;
        prefix: string;
        placeholder: undefined;
        maxLength: undefined;
        checkValidity: (_text: string) => boolean;
        showSeparator: boolean;
    };
    ADHAAR: {
        formatter: (text: string) => string;
        unformatter: (text: string) => string;
        prefix: string;
        placeholder: undefined;
        maxLength: number;
        checkValidity: (_text: string) => boolean;
        showSeparator: boolean;
    };
    AMOUNT: {
        formatter: (text: string) => string;
        unformatter: (text: string) => string;
        prefix: string;
        placeholder: undefined;
        maxLength: undefined;
        checkValidity: (_text: string) => boolean;
        showSeparator: boolean;
    };
    AMOUNT_RUPEE: {
        formatter: (amount: number | string) => string;
        unformatter: (text: string) => string;
        prefix: string;
        placeholder: undefined;
        maxLength: undefined;
        checkValidity: (_text: string) => boolean;
        showSeparator: boolean;
    };
    EMAIL: {
        formatter: (text: string) => string;
        unformatter: (text: string) => string;
        prefix: string;
        placeholder: string;
        maxLength: undefined;
        checkValidity: (_text: string) => boolean;
        showSeparator: boolean;
    };
    PHONE_NUMBER: {
        formatter: (text: string) => string;
        unformatter: (text: string) => string;
        prefix: string;
        placeholder: string;
        maxLength: number;
        checkValidity: (value?: string) => boolean;
        showSeparator: boolean;
    };
    SEARCH_BAR: {
        formatter: (text: string) => string;
        unformatter: (text: string) => string;
        prefix: React.JSX.Element;
        placeholder: undefined;
        maxLength: undefined;
        checkValidity: (_text: string) => boolean;
        showSeparator: boolean;
    };
};
export declare const TEXT_PROP_MAP_STANDALONE: () => {
    VEHICLE_NO: {
        formatter: (regNo: string) => string;
        unformatter: (regNo: string) => string;
        prefix: string;
        placeholder: string;
        maxLength: number;
        checkValidity: (_value?: string) => boolean;
        showSeparator: boolean;
    };
    TEXT: {
        formatter: (text: string) => string;
        unformatter: (text: string) => string;
        prefix: string;
        placeholder: undefined;
        maxLength: undefined;
        checkValidity: (_text: string) => boolean;
        showSeparator: boolean;
    };
    PHONE_NUMBER: {
        formatter: (text: string) => string;
        unformatter: (text: string) => string;
        prefix: string;
        placeholder: string;
        maxLength: number;
        checkValidity: (value?: string) => boolean;
        showSeparator: boolean;
    };
};
export declare const getColor: ({ colors, isFocused, inverse, isErrorState, value, }: {
    colors: typeof BaseColors;
    isFocused: boolean;
    isErrorState: boolean;
    inverse: boolean;
    value?: string;
}) => {
    border: string;
    icon: string;
};
//# sourceMappingURL=config.d.ts.map