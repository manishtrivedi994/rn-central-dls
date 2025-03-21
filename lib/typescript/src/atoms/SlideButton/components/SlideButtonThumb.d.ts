import React from 'react';
import { Animated, type PanResponderInstance, type StyleProp, type ViewStyle } from 'react-native';
type Props = {
    sliderY: Animated.Value;
    sliderPanResponder: PanResponderInstance;
    thumbStyle?: StyleProp<ViewStyle>;
    iconColor?: string;
    containerStyle?: StyleProp<ViewStyle>;
};
declare const SlideButtonThumb: (props: Props) => React.JSX.Element;
export { SlideButtonThumb };
//# sourceMappingURL=SlideButtonThumb.d.ts.map