import { type StyleProp, type ViewStyle } from 'react-native';
import React from 'react';
import { TextToken, TextTokenV3 } from '../../typography/text';
export type BaseTagsProps = {
    containerStyle: StyleProp<ViewStyle>;
    label: string | number;
    textColor: string;
    textVariant: TextToken | TextTokenV3;
};
declare const BaseTags: ({ containerStyle, label, textColor, textVariant }: BaseTagsProps) => React.JSX.Element;
export default BaseTags;
//# sourceMappingURL=BaseTags.d.ts.map