import { Animated } from 'react-native';
type Props = {
    isLoading?: boolean;
};
/**
 * Custom hook to handle a loading animation.
 *
 * @param {Object} props - The properties passed to the hook.
 * @param {boolean} [props.isLoading=false] - Indicates whether the loading animation should be active.
 * @returns {Object} An object containing the animation style.
 * @returns {Object} return.loadingAnimationStyle - The style object for the loading animation.
 *
 * @example
 * const { loadingAnimationStyle } = useLoadingAnimation({ isLoading: true });
 * return <Animated.View style={loadingAnimationStyle} />;
 */
declare const useLoadingAnimation: (props: Props) => {
    loadingAnimationStyle: false | {
        transform: {
            rotate: Animated.AnimatedInterpolation<string | number>;
        }[];
    };
};
export { useLoadingAnimation };
//# sourceMappingURL=useLoadingAnimation.d.ts.map