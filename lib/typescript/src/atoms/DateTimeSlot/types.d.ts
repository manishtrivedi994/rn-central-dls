import type { StyleProp, ViewStyle } from 'react-native';
import type BaseColors from '../../theme/color/base';
export type DateTimeVariants = 'TIME' | 'DATE';
export type DatetimeSlotProps = {
    label: string;
    type: DateTimeVariants;
    disabled?: boolean;
    selected?: boolean;
    labelColor?: string;
    subLabel?: string;
    customStyle?: StyleProp<ViewStyle>;
    onPress?: () => void;
};
export type GetStylesType = {
    colors: typeof BaseColors;
    disabled: boolean;
    selected: boolean;
};
//# sourceMappingURL=types.d.ts.map