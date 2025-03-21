import React from 'react';
import { type LayoutChangeEvent, type StyleProp, type ViewStyle } from 'react-native';
type Props = {
    isLoading?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    onLayout?: (event: LayoutChangeEvent) => void;
    children: JSX.Element | JSX.Element[];
};
declare const BaseSlideButton: (props: Props) => React.JSX.Element;
export { BaseSlideButton };
//# sourceMappingURL=BaseSlideButton.d.ts.map