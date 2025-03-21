import React from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
type Props = {
    containerStyle: StyleProp<ViewStyle>;
    isLoading?: boolean;
    inverse?: boolean;
};
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
declare const BaseLoader: (props: Props) => React.JSX.Element | null;
export default BaseLoader;
//# sourceMappingURL=BaseLoader.d.ts.map