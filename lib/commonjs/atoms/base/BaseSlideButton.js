"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseSlideButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _BaseLoader = _interopRequireDefault(require("./BaseLoader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseSlideButton = props => {
  const {
    isLoading,
    containerStyle,
    children,
    onLayout
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    onLayout: onLayout,
    style: [st.container, containerStyle]
  }, /*#__PURE__*/_react.default.createElement(_BaseLoader.default, {
    containerStyle: st.absolute,
    isLoading: isLoading
  }), !isLoading ? children : null);
};
exports.BaseSlideButton = BaseSlideButton;
const st = _reactNative.StyleSheet.create({
  absolute: {
    position: 'absolute',
    alignSelf: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  container: {
    width: '100%'
  }
});
//# sourceMappingURL=BaseSlideButton.js.map