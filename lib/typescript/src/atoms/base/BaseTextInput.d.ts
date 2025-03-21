import { TextInput, type TextInputProps, type StyleProp, type ViewStyle, type TextInputFocusEventData, type NativeSyntheticEvent, type TextStyle } from 'react-native';
import React, { type ReactElement } from 'react';
import { TextToken } from '../../typography/text';
import { TextTokenV3 } from '../../typography/text/styles';
import type BaseColors from '../../theme/color/base';
import { LinkButton } from '../LinkButton';
interface Props extends Omit<TextInputProps, 'placeholder'> {
    label?: string;
    hint?: string;
    inverse?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    borderColor?: string;
    hintColor?: string;
    prefix?: React.ReactElement | string;
    isMandatory?: boolean;
    onPressClear?: () => void;
    textInputStyle?: StyleProp<TextStyle>;
    closeIconColor?: string;
    showSeparator?: boolean;
    hintTextVariant?: TextToken | TextTokenV3;
    prefixTextVariant?: TextToken | TextTokenV3;
    prefixStyle?: StyleProp<ViewStyle>;
    prefixColor?: keyof typeof BaseColors.text;
    rightActionComponent?: ReactElement<typeof LinkButton>;
    placeholder?: string | string[];
    animatedStaticPlaceholderText?: string;
    onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    textStyle?: TextToken | TextTokenV3;
    charCount?: boolean;
    textInputHeight?: number;
    /**
     * Internal Prop
     */
    childTapEnable?: boolean;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<TextInput>>>;
export default _default;
//# sourceMappingURL=BaseTextInput.d.ts.map