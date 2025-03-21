/// <reference types="react" />
import { Animated, type LayoutChangeEvent } from 'react-native';
type Props = {
    sliderSize: number;
    onSwipeEnd?: () => void;
    onSwipeStart?: () => void;
    disabled?: boolean;
    onPressIn?: () => void;
    onPressOut?: () => void;
};
declare const useAnimatedSlideButton: (props: Props) => {
    sliderPanResponder: import("react-native").PanResponderInstance;
    sliderY: Animated.Value;
    sliderViewDimensions: import("react").MutableRefObject<{
        width: number;
        height: number;
        x: number;
        y: number;
    }>;
    interpolatedTextOpacity: Animated.AnimatedInterpolation<string | number>;
    handleLayout: (event: LayoutChangeEvent) => void;
};
export { useAnimatedSlideButton };
//# sourceMappingURL=useAnimatedSlideButton.d.ts.map