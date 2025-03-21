import React from 'react';
import { type PressableProps, type StyleProp, type ViewStyle } from 'react-native';
import { TextToken, TextTokenV3 } from '../../typography/text';
interface Props extends PressableProps {
    outerContainerStyle?: StyleProp<ViewStyle>;
    innerContainerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    onPress?: () => void;
    checked?: boolean;
    children?: React.ReactElement;
    label?: string;
    labelVariant?: TextToken | TextTokenV3;
    labelFontColor?: string;
}
declare const BaseRadioButton: React.MemoExoticComponent<(props: Props) => React.JSX.Element>;
export { BaseRadioButton };
//# sourceMappingURL=BaseRadioButton.d.ts.map