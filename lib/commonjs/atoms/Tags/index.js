"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tags = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _size2 = _interopRequireDefault(require("../../theme/size"));
var _themeContext = require("../../theme/themeContext");
var _BaseTags = _interopRequireDefault(require("../base/BaseTags"));
var _config = require("./config");
var _text = require("../../typography/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TagsComponent = props => {
  const {
    size = "SMALL",
    appearance,
    tagsCount = 0,
    label,
    style,
    bg
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const {
    textColor,
    ...baseStyles
  } = _react.default.useMemo(() => {
    return (0, _config.getStyles)({
      colors,
      appearance,
      bg: bg ?? "PRIMARY"
    });
  }, [colors, appearance]);

  // backward compatibility, MEDIUM is deprecated
  const _size = _react.default.useMemo(() => size === "MEDIUM" ? "LARGE" : size, [size]);
  return /*#__PURE__*/_react.default.createElement(_BaseTags.default, {
    label: label ?? tagsCount,
    containerStyle: [style, baseStyles, st[_size]],
    textColor: textColor,
    textVariant: _size === "LARGE" ? _text.TextTokenV3.regular_200 : _text.TextTokenV3.medium_150
  });
};
const Tags = exports.Tags = /*#__PURE__*/_react.default.memo(TagsComponent);
const st = _reactNative.StyleSheet.create({
  SMALL: {
    height: 20,
    paddingHorizontal: _size2.default.Space.space4
  },
  LARGE: {
    height: 22,
    paddingHorizontal: _size2.default.Space.space4
  }
});
//# sourceMappingURL=index.js.map