import { type StyleProp, type ViewStyle, type PressableProps, type TextStyle } from 'react-native';
import React from 'react';
import { TextToken, TextTokenV3 } from '../../typography/text';
interface Props extends PressableProps {
    title: string;
    label?: string;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    containerStyle?: StyleProp<ViewStyle>;
    textStyleContainer?: StyleProp<TextStyle>;
    labelStyleContainer?: StyleProp<TextStyle>;
    iconSpacing?: number;
    textVariant: TextTokenV3 | TextToken;
    labelVariant?: TextTokenV3;
    fontColor: string;
    showBorder?: boolean;
    underline?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    onPress?: () => void;
    throttle?: number;
    isBorderRounded?: boolean;
    flipCaption?: boolean;
}
declare const BaseButton: React.MemoExoticComponent<(props: Props) => React.JSX.Element>;
export { BaseButton };
//# sourceMappingURL=BaseButton.d.ts.map