import { type TextInputProps, TextInput } from 'react-native';
import React, { type ReactElement } from 'react';
import { StandaloneTextInputType } from './type';
import type { LinkButton } from '../LinkButton';
interface Props extends Omit<TextInputProps, 'placeholder'> {
    hint?: string;
    type?: StandaloneTextInputType;
    initialValue?: string;
    onPressContainer?: () => void;
    onChangeText?: (text: string, isValid?: boolean) => void;
    showError?: boolean;
    disabled?: boolean;
    rightAction?: boolean;
    throttle?: number;
    rightActionComponent?: ReactElement<typeof LinkButton>;
    placeholder?: string;
    onPressClear?: Function;
}
export declare const StandaloneTextInput: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<TextInput>>>;
export {};
//# sourceMappingURL=index.d.ts.map