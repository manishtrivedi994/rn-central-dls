"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _BasePageControlsDotChildren = _interopRequireDefault(require("./BasePageControlsDotChildren"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
  const scrollRef = (0, _react.useRef)(null);
  const [max, setMax] = (0, _react.useState)(visibleNodes - 2);
  const [min, setMin] = (0, _react.useState)(1);
  const scrollToDot = (0, _react.useCallback)(index => {
    var _scrollRef$current;
    if (index >= nodes) {
      return;
    }
    (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 || _scrollRef$current.scrollToOffset({
      offset: index * (size + 4),
      animated: true
    });
  }, [size, scrollRef, nodes]);
  (0, _react.useEffect)(() => {
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
  const DonItem = (0, _react.useCallback)(({
    item,
    index
  }) => {
    return /*#__PURE__*/_react.default.createElement(_BasePageControlsDotChildren.default, {
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
  const widthSize = (0, _react.useMemo)(() => {
    if (nodes > visibleNodes) {
      return visibleNodes;
    }
    return nodes;
  }, [nodes, visibleNodes]);
  const listStyle = (0, _react.useMemo)(() => {
    return {
      width: (size + 4) * widthSize
    };
  }, [size, widthSize]);
  const totalLength = (0, _react.useMemo)(() => Array(nodes).fill(0, nodes), [nodes]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
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
var _default = exports.default = /*#__PURE__*/_react.default.memo(PageControlsBase);
//# sourceMappingURL=BasePageControlsDot.js.map