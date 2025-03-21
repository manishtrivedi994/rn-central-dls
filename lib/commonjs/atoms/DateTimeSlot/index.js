"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimeSlot = void 0;
var _react = _interopRequireDefault(require("react"));
var _BaseChip = _interopRequireDefault(require("../base/BaseChip"));
var _themeContext = require("../../theme/themeContext");
var _reactNative = require("react-native");
var _config = require("./config");
var _size = _interopRequireDefault(require("../../theme/size"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const DATE_HEIGHT = 70;
const DATE_WIDTH = 73;
const DateTimeSlotComponent = props => {
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const {
    type = 'TIME',
    disabled = false,
    selected = false,
    customStyle = {}
  } = props;
  const baseStyles = _react.default.useMemo(() => {
    return (0, _config.getStyles)({
      colors,
      disabled,
      selected
    });
  }, [colors, disabled, selected]);
  return /*#__PURE__*/_react.default.createElement(_BaseChip.default, _extends({}, props, {
    labelColor: baseStyles.labelColor,
    containerStyle: [st.baseStyle, baseStyles, st[type], customStyle]
  }));
};
const st = _reactNative.StyleSheet.create({
  baseStyle: {
    borderWidth: 1,
    borderRadius: _size.default.CornerRadius.cornerRadius8
  },
  DATE: {
    flexDirection: 'column',
    height: DATE_HEIGHT,
    width: DATE_WIDTH
  },
  TIME: {
    height: _size.default.Size.size34
  }
});
const DateTimeSlot = exports.DateTimeSlot = /*#__PURE__*/_react.default.memo(DateTimeSlotComponent);
//# sourceMappingURL=index.js.map