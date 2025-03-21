import React from 'react';
import type { TextProps as NativeTextProps, StyleProp, TextStyle } from 'react-native';
import { TextToken, TextTokenV3 } from './styles';
interface TextProps extends NativeTextProps {
    variant: TextToken | TextTokenV3;
    fontColor?: string;
    multiline?: boolean;
    key?: string;
    textAlign?: 'left' | 'right' | 'center';
    style?: StyleProp<TextStyle>;
    italic?: boolean;
}
declare const Text: React.MemoExoticComponent<{
    (props: TextProps): React.JSX.Element;
    defaultProps: {
        multiline: boolean;
        children: null;
        style: null;
        textAlign: string;
        italic: boolean;
    };
}>;
export { Text, TextToken, TextTokenV3 };
//# sourceMappingURL=index.d.ts.map