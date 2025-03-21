import React from 'react';
/**
 * A functional component that renders a set of dots representing page navigation.
 * It uses the `BasePageControlsDot` component to display the dots and applies
 * the specified theme colors.
 *
 * @param props - The properties for the component.
 * @param props.nodes - The total number of dots to display.
 * @param props.pos - The current active position (index) of the dots.
 * @param props.inverse - (Optional) The inverse boolean for the dots. Defaults to `false`. It's to determine whether the dots should be light or dark.
 * @returns A React element representing the page navigation dots.
 *
 * @example
 * <PageControls nodes={DummyPageControlsArray.length} pos={pageControlSwipePos} />
 */
interface Props {
    nodes: number;
    pos: number;
    inverse?: boolean;
}
declare const PageControls: React.NamedExoticComponent<Props>;
export { PageControls };
//# sourceMappingURL=index.d.ts.map