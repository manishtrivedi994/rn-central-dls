"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rating = void 0;
var _react = _interopRequireDefault(require("react"));
var _themeContext = require("../../theme/themeContext");
var _BaseRating = _interopRequireDefault(require("../base/BaseRating"));
var _config = require("./config");
var _types = require("./types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const RatingComponent = props => {
  const {
    size = 'SMALL',
    disabled,
    ...rest
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const {
    color,
    activeColor
  } = _react.default.useMemo(() => {
    return (0, _config.getStyles)({
      colors,
      disabled
    });
  }, [colors, disabled]);
  return /*#__PURE__*/_react.default.createElement(_BaseRating.default, _extends({
    size: _types.SizeEnum[size],
    color: color,
    activeColor: activeColor,
    disabled: disabled
  }, rest));
};
const Rating = exports.Rating = /*#__PURE__*/_react.default.memo(RatingComponent);
//# sourceMappingURL=index.js.map