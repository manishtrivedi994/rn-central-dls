import React from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import { TextToken, TextTokenV3 } from '../../typography/text';
interface Props {
    text: string;
    icon?: React.ReactElement;
    containerStyle?: StyleProp<ViewStyle>;
    textColor: string;
    textVariant?: TextToken | TextTokenV3;
}
declare const BaseBadge: (props: Props) => React.JSX.Element;
export default BaseBadge;
//# sourceMappingURL=BaseBadge.d.ts.map