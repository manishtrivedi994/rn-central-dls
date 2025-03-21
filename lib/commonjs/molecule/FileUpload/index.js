"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUpload = void 0;
var _react = _interopRequireDefault(require("react"));
var _BaseFileUpload = require("../base/BaseFileUpload");
var _useFileUploadStates = _interopRequireDefault(require("./hooks/useFileUploadStates"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FileUploadComponent = props => {
  const {
    state
  } = props;
  const {
    customStyles = {},
    onPressIn,
    onPressOut
  } = (0, _useFileUploadStates.default)({
    state
  });
  const {
    titleColor = '',
    subtitleColor = '',
    subtitleFontStyle = '',
    iconColor = '',
    ...styles
  } = customStyles;
  return /*#__PURE__*/_react.default.createElement(_BaseFileUpload.BaseFileUpload, _extends({}, props, {
    containerStyle: styles,
    customStyle: {
      titleColor,
      subtitleColor,
      subtitleFontStyle,
      iconColor
    },
    onPressIn: onPressIn,
    onPressOut: onPressOut
  }));
};
const FileUpload = exports.FileUpload = /*#__PURE__*/_react.default.memo(FileUploadComponent);
//# sourceMappingURL=index.js.map