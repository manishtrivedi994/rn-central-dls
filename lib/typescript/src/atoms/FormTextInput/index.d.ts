import { type TextInputProps, TextInput } from 'react-native';
import React, { type ReactElement } from 'react';
import { TextInputType } from './type';
import type { LinkButton } from '../LinkButton';
interface Props extends Omit<TextInputProps, 'placeholder'> {
    label?: string;
    hint?: string;
    type?: TextInputType;
    inverse?: boolean;
    isMandatory?: boolean;
    initialValue?: string;
    onPressContainer?: () => void;
    onChangeText?: (text: string, isValid?: boolean) => void;
    showError?: boolean;
    disabled?: boolean;
    rightAction?: boolean;
    throttle?: number;
    rightActionComponent?: ReactElement<typeof LinkButton>;
    animatedStaticPlaceholderText?: string;
    placeholder?: string | string[];
    onPressClear?: () => void;
    charCount?: boolean;
    customPrefixIcon?: JSX.Element;
}
export declare const FormTextInput: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<TextInput>>>;
export {};
//# sourceMappingURL=index.d.ts.map