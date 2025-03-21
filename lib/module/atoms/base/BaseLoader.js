import React from 'react';
import { Animated, View } from 'react-native';
import Svgs from '../../icons';
import { useTheme } from '../../theme/themeContext';
import { useLoadingAnimation } from './hooks/useLoadingAnimation';
/**
 * BaseLoader Component
 *
 * This component renders a loading animation inside a container.
 * It uses an SVG loader and applies a rotating animation when the `isLoading` prop is true.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {StyleProp<ViewStyle>} props.containerStyle - The style to be applied to the container view.
 * @param {boolean} [props.isLoading=false] - Indicates whether the loader should be visible and animated.
 * @returns {JSX.Element | null} The rendered component or null if not loading.
 *
 * @example
 * <BaseLoader containerStyle={styles.loaderContainer} isLoading={true} />
 */

const BaseLoader = props => {
  const {
    containerStyle,
    isLoading
  } = props;
  const {
    colors
  } = useTheme();
  const {
    loadingAnimationStyle
  } = useLoadingAnimation({
    isLoading
  });
  if (!isLoading) {
    return null;
  }
  return /*#__PURE__*/React.createElement(View, {
    style: containerStyle
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: loadingAnimationStyle
  }, /*#__PURE__*/React.createElement(Svgs.Loader, {
    startColor: props !== null && props !== void 0 && props.inverse ? colors.icon.defaultInverse : colors.bgFill.brand,
    endColor: props !== null && props !== void 0 && props.inverse ? colors.icon.defaultInverse : colors.bgFill.brandSecondary
  })));
};
export default BaseLoader;
//# sourceMappingURL=BaseLoader.js.map