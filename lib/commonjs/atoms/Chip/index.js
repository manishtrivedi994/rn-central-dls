"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _size = _interopRequireDefault(require("../../theme/size"));
var _themeContext = require("../../theme/themeContext");
var _BaseChip = _interopRequireDefault(require("../base/BaseChip"));
var _config = require("./config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ChipComponent = props => {
  const {
    style = {},
    size: chipSize = 'SMALL',
    disabled = false,
    selected = false,
    type = 'SQUARE'
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const baseStyles = _react.default.useMemo(() => {
    return (0, _config.getStyles)({
      colors,
      disabled,
      selected
    });
  }, [colors, disabled, selected]);
  return /*#__PURE__*/_react.default.createElement(_BaseChip.default, _extends({}, props, {
    containerStyle: [style, baseStyles, st[chipSize], st[type]],
    labelColor: baseStyles.labelColor
  }));
};
const Chip = exports.Chip = /*#__PURE__*/_react.default.memo(ChipComponent);
const st = _reactNative.StyleSheet.create({
  SMALL: {
    height: _size.default.Size.size28
  },
  MEDIUM: {
    height: _size.default.Size.size38
  },
  SQUARE: {
    borderRadius: _size.default.CornerRadius.cornerRadius8
  },
  ROUNDED: {
    borderRadius: _size.default.CornerRadius.cornerRadiusFull
  }
});
//# sourceMappingURL=index.js.map