import type BaseColors from '../../theme/color/base';
export type SwitchVariants = 'default' | 'critical' | 'disabled';
export type SwitchSizes = 'small' | 'medium';
export interface GetSwitchStylesParams {
    colors: typeof BaseColors;
    variant: SwitchVariants;
}
export interface GetSwitchConfigParams {
    color: string;
    size: SwitchSizes;
}
export interface ISwitchProps {
    variant?: SwitchVariants;
    onToggle?: (isActive: boolean) => void;
    label?: string;
    description?: string;
    isActive?: boolean;
    size?: SwitchSizes;
}
export interface ISwitchChipProps {
    onPress: (isActive: boolean) => void;
    isActive: boolean;
    color: string;
    size: SwitchSizes;
    haveTick: boolean;
    variant: SwitchVariants;
}
//# sourceMappingURL=types.d.ts.map