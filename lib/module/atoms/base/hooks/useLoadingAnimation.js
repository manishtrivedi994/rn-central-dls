import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing } from 'react-native';
const LOADER_ANIMATION_DURATION = 1000;

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

const useLoadingAnimation = props => {
  const {
    isLoading = false
  } = props;
  const loadingAnimation = useRef(new Animated.Value(0)).current;
  const lastRunningAnimation = useRef();
  useEffect(() => {
    if (isLoading) {
      var _lastRunningAnimation, _lastRunningAnimation2;
      (_lastRunningAnimation = lastRunningAnimation.current) === null || _lastRunningAnimation === void 0 || _lastRunningAnimation.stop();
      lastRunningAnimation.current = Animated.loop(Animated.timing(loadingAnimation, {
        duration: LOADER_ANIMATION_DURATION,
        toValue: 1,
        useNativeDriver: false,
        easing: Easing.linear
      }), {
        iterations: -1,
        resetBeforeIteration: true
      });
      (_lastRunningAnimation2 = lastRunningAnimation.current) === null || _lastRunningAnimation2 === void 0 || _lastRunningAnimation2.start();
    } else {
      var _lastRunningAnimation3;
      (_lastRunningAnimation3 = lastRunningAnimation.current) === null || _lastRunningAnimation3 === void 0 || _lastRunningAnimation3.stop();
    }
    return () => {
      var _lastRunningAnimation4;
      (_lastRunningAnimation4 = lastRunningAnimation.current) === null || _lastRunningAnimation4 === void 0 || _lastRunningAnimation4.stop();
    };
  }, [loadingAnimation, isLoading]);
  const {
    loadingAnimationStyle
  } = useMemo(() => {
    return {
      loadingAnimationStyle: isLoading && {
        transform: [{
          rotate: loadingAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
            easing: Easing.linear
          })
        }]
      }
    };
  }, [isLoading, loadingAnimation]);
  return {
    loadingAnimationStyle
  };
};
export { useLoadingAnimation };
//# sourceMappingURL=useLoadingAnimation.js.map