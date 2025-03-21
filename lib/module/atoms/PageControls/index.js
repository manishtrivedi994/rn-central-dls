import React, { useMemo } from 'react';
import BasePageControlsDot from '../base/BasePageControlsDot';
import { NODE_SIZE, ThemeColors, VISIBLIE_NODES } from './config';
import { useTheme } from '../../theme/themeContext';

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

const PageControlComponent = props => {
  const {
    nodes,
    pos,
    inverse = false
  } = props;
  const {
    colors
  } = useTheme();
  const theme = useMemo(() => {
    const _ThemeColors = ThemeColors(colors);
    return inverse ? _ThemeColors === null || _ThemeColors === void 0 ? void 0 : _ThemeColors.Light : _ThemeColors.Dark;
  }, [inverse, colors]);
  return /*#__PURE__*/React.createElement(BasePageControlsDot, {
    nodes: nodes,
    visibleNodes: VISIBLIE_NODES,
    pos: pos,
    size: NODE_SIZE,
    activeColor: theme.activeColor,
    inActiveColor: theme.inActiveColor
  });
};
const PageControls = /*#__PURE__*/React.memo(PageControlComponent);
export { PageControls };
//# sourceMappingURL=index.js.map