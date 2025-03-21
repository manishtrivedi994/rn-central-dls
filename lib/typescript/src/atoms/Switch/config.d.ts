import type { GetSwitchConfigParams, GetSwitchStylesParams } from './types';
export declare const getSwitchStyles: ({ colors, variant }: GetSwitchStylesParams) => {
    labelColor: string;
    descriptionColor: string;
    switchColor: string;
    haveTick: boolean;
} | {
    labelColor: string;
    descriptionColor: string;
    switchColor: string;
    haveTick: boolean;
} | {
    labelColor: string;
    descriptionColor: string;
    switchColor: string;
    haveTick: boolean;
};
export declare const getSwitchConfig: ({ color, size }: GetSwitchConfigParams) => {
    config: {
        circleDiameter: number;
        switchContainerWidth: number;
        switchContanerHeight: number;
    } | {
        circleDiameter: number;
        switchContainerWidth: number;
        switchContanerHeight: number;
    };
    circleContainerStyle: {
        height: number;
        width: number;
        backgroundColor: string;
    };
    circleStyle: {
        height: number;
        width: number;
        borderRadius: number;
    };
};
//# sourceMappingURL=config.d.ts.map