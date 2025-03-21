"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseIconButton = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _size = _interopRequireDefault(require("../../theme/size"));
var _useRapidClickHandler = _interopRequireDefault(require("./hooks/useRapidClickHandler"));
var _BaseLoader = _interopRequireDefault(require("./BaseLoader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BaseIconComponent = props => {
  const {
    isLoading = false,
    containerStyle,
    icon = null,
    disabled,
    onPress,
    throttle,
    inverse,
    ...pressableProps
  } = props;
  const {
    onRapidPressHandler
  } = (0, _useRapidClickHandler.default)({
    onPress,
    throttle
  });
  if (!icon) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, _extends({}, pressableProps, {
    onPress: onRapidPressHandler,
    disabled: disabled || isLoading,
    style: [st.base, containerStyle]
  }), isLoading ? /*#__PURE__*/_react.default.createElement(_BaseLoader.default, {
    isLoading: isLoading,
    containerStyle: st.loader,
    inverse: inverse
  }) : icon);
};
const BaseIconButton = exports.BaseIconButton = /*#__PURE__*/_react.default.memo(BaseIconComponent);
const st = _reactNative.StyleSheet.create({
  base: {
    borderRadius: _size.default.CornerRadius.cornerRadius4,
    padding: _size.default.Space.space4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    position: 'absolute'
  }
});
//# sourceMappingURL=BaseIconButton.js.map