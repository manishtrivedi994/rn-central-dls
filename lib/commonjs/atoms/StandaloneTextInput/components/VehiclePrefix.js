"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VehiclePrefix = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _text = require("../../../typography/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const indianFlagPath = require('../../../assets/images/flag.png');
const VehiclePrefix = props => {
  const {
    colors
  } = props;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: indianFlagPath,
    style: styles.flag
  }), /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: _text.TextTokenV3.semibold_200,
    fontColor: colors.text.defaultInverse
  }, "IND"));
};
exports.VehiclePrefix = VehiclePrefix;
const styles = _reactNative.StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flag: {
    height: 14,
    width: 14,
    resizeMode: 'contain'
  }
});
//# sourceMappingURL=VehiclePrefix.js.map