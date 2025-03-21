import { type StyleProp, type ViewStyle, type TextStyle } from 'react-native';
import React from 'react';
import { TextTokenV3 } from '../../typography/text';
import type BaseColors from '../../theme/color/base';
interface Props {
    label?: string;
    containerStyle?: StyleProp<ViewStyle>;
    borderColor?: string;
    isMandatory?: boolean;
    onPress?: () => void;
    pressableStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    valueVariant?: TextTokenV3;
    labelVariant?: TextTokenV3;
    value?: string;
    numberOfLines?: number;
    labelFontColor: keyof typeof BaseColors.text;
    valueFontColor: keyof typeof BaseColors.text;
    placeholder?: string;
}
declare const _default: React.MemoExoticComponent<(props: Props) => React.JSX.Element>;
export default _default;
//# sourceMappingURL=BaseDropdown.d.ts.map