import { type StyleProp, type ViewStyle } from 'react-native';
import type { TextToken, TextTokenV3 } from '../../../typography/text';
export type DirectionType = 'TOP' | 'BOTTOM';
export declare enum DirectionEnum {
    TOP = "TOP",
    BOTTOM = "BOTTOM"
}
export type VerticalAnimatedTextProps = {
    staticPlaceholderText?: string;
    textArray: string[];
    duration?: number;
    enabled?: boolean;
    direction?: DirectionType;
    textVariant?: TextToken | TextTokenV3;
    textColor?: string;
    containerStyle?: StyleProp<ViewStyle>;
    containerHeight?: number;
};
//# sourceMappingURL=type.d.ts.map