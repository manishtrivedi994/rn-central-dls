"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoStrip = void 0;
var _react = _interopRequireDefault(require("react"));
var _BaseBadge = _interopRequireDefault(require("../base/BaseBadge"));
var _types = require("./types");
var _config = require("./config");
var _themeContext = require("../../theme/themeContext");
var _text = require("../../typography/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const InfoStrip = exports.InfoStrip = /*#__PURE__*/_react.default.memo(({
  type = _types.InfoStripTypeEnum.card,
  color = _types.InfoStripColorEnum.neutral,
  text,
  icon
}) => {
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const baseInfoStripProps = _react.default.useMemo(() => {
    return (0, _config.fetchInfoStripStylingBasedOnProps)({
      type,
      colors,
      color
    });
  }, [type, colors, color]);
  return /*#__PURE__*/_react.default.createElement(_BaseBadge.default, {
    text: text,
    icon: icon,
    containerStyle: baseInfoStripProps.containerStyle,
    textVariant: _text.TextTokenV3.regular_200,
    textColor: baseInfoStripProps.textColor
  });
});
//# sourceMappingURL=index.js.map