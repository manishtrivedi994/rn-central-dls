import type { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { ModuleName } from './themeContext';
import type BaseColors from './color/base';
import type { BaseGradients } from './gradient/base';
import type size from './size';
type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
/**
 * Creates a custom hook for generating styles based on the current theme.
 * Usage:
 * const useStyles = makeStyles(({ colors }) => ({
 *   container: {
 *     flex: 1,
 *     backgroundColor: colors.bgFill.defaultPrimary,
 *   },
 * }));
 *
 * const useStylesWithParams = makeStyles<{ color: string }>(({ colors, params }) => ({
 *   container: {
 *     flex: 1,
 *     backgroundColor: colors.bgFill.defaultPrimary,
 *     borderColor: params?.color,
 *   },
 * }));
 *
 * In a component:
 * const { styles, colors } = useStyles();
 * const { styles, colors } = useStylesWithParams({ color: 'red' });
 *
 * @param {Function} _st - A function that takes the theme object and returns a styles object.
 * @returns {Function} A custom hook that provides the generated styles and colors.
 */
export declare const makeStyles: <K extends Record<string, any>, T extends NamedStyles<T> | NamedStyles<any> = NamedStyles<any>>(_st: (theme: {
    colors: typeof BaseColors;
    params?: K;
    gradientColor: typeof BaseGradients;
    module: ModuleName;
    sizes: typeof size;
}) => T) => ((params?: K) => {
    styles: T;
    colors: typeof BaseColors;
    params?: K;
});
export {};
//# sourceMappingURL=makeStyles.d.ts.map