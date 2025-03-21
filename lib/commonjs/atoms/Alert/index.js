"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = void 0;
var _react = _interopRequireDefault(require("react"));
var _themeContext = require("../../theme/themeContext");
var _config = require("./config");
var _BaseAlert = _interopRequireDefault(require("../base/BaseAlert"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Alert = exports.Alert = /*#__PURE__*/_react.default.memo(props => {
  const {
    type = 'INFO',
    priority = 'LOW',
    containerStyle,
    ...rest
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const baseStyle = _react.default.useMemo(() => {
    return (0, _config.getAlertStyles)({
      colors,
      type,
      priority
    });
  }, [colors, type, priority]);
  return /*#__PURE__*/_react.default.createElement(_BaseAlert.default, _extends({}, rest, {
    iconColor: baseStyle.iconColor,
    textColor: baseStyle.textColor,
    containerStyle: [containerStyle, baseStyle]
  }));
});
//# sourceMappingURL=index.js.map