"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;
var _react = _interopRequireDefault(require("react"));
var _BaseBadge = _interopRequireDefault(require("../base/BaseBadge"));
var _config = require("./config");
var _themeContext = require("../../theme/themeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Badge = exports.Badge = /*#__PURE__*/_react.default.memo(({
  type = 'dark',
  variant = 'grey',
  state = 'active',
  text,
  icon,
  corner,
  border = false,
  textState
}) => {
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const baseBadgeProps = _react.default.useMemo(() => {
    return (0, _config.fetchBadgeStylingBasedOnProps)({
      type,
      variant,
      state,
      colors,
      corner,
      border,
      textState
    });
  }, [type, variant, state, colors, corner, border, textState]);
  return /*#__PURE__*/_react.default.createElement(_BaseBadge.default, {
    text: text,
    icon: icon,
    containerStyle: baseBadgeProps.containerStyle,
    textColor: baseBadgeProps.textColor,
    textVariant: baseBadgeProps.textVariant
  });
});
//# sourceMappingURL=index.js.map