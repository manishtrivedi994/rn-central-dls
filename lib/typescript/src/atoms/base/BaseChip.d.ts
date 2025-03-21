import React from 'react';
import { type PressableProps, type StyleProp, type ViewStyle } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import { type TagsComponentProps } from '../Tags/types';
interface Props extends PressableProps {
    label: string;
    subLabel?: string;
    disabled?: boolean;
    labelColor?: string;
    withBadge?: boolean;
    withCross?: boolean;
    onPress?: () => void;
    leftIcon?: React.ReactElement<SvgProps>;
    rightIcon?: React.ReactElement<SvgProps>;
    containerStyle?: StyleProp<ViewStyle>;
    tagsProps?: TagsComponentProps;
}
declare const BaseChip: (props: Props) => React.JSX.Element;
export default BaseChip;
//# sourceMappingURL=BaseChip.d.ts.map