import React from 'react';
import type BaseColors from '../../theme/color/base';
import type { StyleProp, ViewStyle } from 'react-native';
import { InfoStripColorEnum, type InfoStripColors, type InfoStripType } from './types';
export type Config = {
    [key in InfoStripColorEnum]: {
        backgroundColor: string;
        icon?: () => React.JSX.Element;
    };
};
export type fetchInfoStripStylingBasedOnPropsParam = {
    type: InfoStripType;
    colors: typeof BaseColors;
    color: InfoStripColors;
};
export declare const fetchInfoStripStylingBasedOnProps: ({ type, colors, color, }: fetchInfoStripStylingBasedOnPropsParam) => {
    icon: (() => React.JSX.Element) | undefined;
    textColor: string;
    containerStyle: StyleProp<ViewStyle>;
};
//# sourceMappingURL=config.d.ts.map