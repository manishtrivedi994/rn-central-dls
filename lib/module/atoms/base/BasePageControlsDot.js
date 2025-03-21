import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import PageControlsDotChildren from './BasePageControlsDotChildren';
/**
 * A functional component that renders a customizable page control indicator using a FlatList.
 * It manages the scrolling behavior and highlights the active page based on the provided parameters.
 *
 * @param {Object} props - The component's props.
 * @param {number} props.nodes - The total number of pages.
 * @param {number} props.pos - The current active page index.
 * @param {number} props.visibleNodes - The number of visible page indicators.
 * @param {number} props.size - The size of each page indicator.
 * @param {string} props.activeColor - The color of the active page indicator.
 * @param {string} props.inActiveColor - The color of the inactive page indicators.
 *
 * @returns - A React functional component that renders the page control indicator.
 *
 */
const PageControlsBase = ({
  nodes,
  visibleNodes,
  pos,
  size,
  activeColor,
  inActiveColor
}) => {
  const scrollRef = useRef(null);
  const [max, setMax] = useState(visibleNodes - 2);
  const [min, setMin] = useState(1);
  const scrollToDot = useCallback(index => {
    var _scrollRef$current;
    if (index >= nodes) {
      return;
    }
    (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 || _scrollRef$current.scrollToOffset({
      offset: index * (size + 4),
      animated: true
    });
  }, [size, scrollRef, nodes]);
  useEffect(() => {
    if (pos >= max) {
      scrollToDot(pos - 3);
      if (pos < nodes - 2) {
        setMin(pos - 2);
        setMax(pos + 1);
      } else {
        setMin(nodes - 5);
        setMax(nodes - 2);
        scrollToDot(pos);
      }
    } else {
      if (pos <= min && pos > 1) {
        scrollToDot(pos - 2);
        setMax(pos + 2);
        setMin(pos - 1);
      } else {
        if (pos <= 1) {
          scrollToDot(0);
          setMax(visibleNodes - 2);
          setMin(1);
        }
      }
    }
  }, [pos, min, max, nodes, visibleNodes, scrollToDot]);
  const DonItem = useCallback(({
    item,
    index
  }) => {
    return /*#__PURE__*/React.createElement(PageControlsDotChildren, {
      key: item,
      pos: pos,
      min: min,
      max: max,
      index: index,
      visibleNodes: visibleNodes,
      nodes: nodes,
      size: size,
      activeColor: activeColor,
      inActiveColor: inActiveColor
    });
  }, [pos, min, max, visibleNodes, nodes, size, activeColor, inActiveColor]);
  const widthSize = useMemo(() => {
    if (nodes > visibleNodes) {
      return visibleNodes;
    }
    return nodes;
  }, [nodes, visibleNodes]);
  const listStyle = useMemo(() => {
    return {
      width: (size + 4) * widthSize
    };
  }, [size, widthSize]);
  const totalLength = useMemo(() => Array(nodes).fill(0, nodes), [nodes]);
  return /*#__PURE__*/React.createElement(FlatList, {
    data: totalLength,
    ref: scrollRef,
    scrollEnabled: false,
    horizontal: true,
    initialNumToRender: nodes,
    style: listStyle,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    renderItem: DonItem
  });
};
export default /*#__PURE__*/React.memo(PageControlsBase);
//# sourceMappingURL=BasePageControlsDot.js.map