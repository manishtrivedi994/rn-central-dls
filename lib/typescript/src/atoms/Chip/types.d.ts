/// <reference types="react" />
import { type StyleProp, type ViewStyle } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import type { TagsComponentProps } from '../Tags/types';
import type BaseColors from '../../theme/color/base';
export type SizeVariants = 'SMALL' | 'MEDIUM';
export type TypeVariants = 'SQUARE' | 'ROUNDED';
export type ChipComponentProps = {
    label: string;
    size?: SizeVariants;
    type?: TypeVariants;
    onPress?: () => void;
    disabled?: boolean;
    labelColor?: string;
    withBadge?: boolean;
    withCross?: boolean;
    selected?: boolean;
    style?: StyleProp<ViewStyle>;
    leftIcon?: React.ReactElement<SvgProps>;
    rightIcon?: React.ReactElement<SvgProps>;
    tagsProps?: TagsComponentProps;
};
export type GetStylesType = {
    colors: typeof BaseColors;
    disabled: boolean;
    selected: boolean;
};
//# sourceMappingURL=types.d.ts.map