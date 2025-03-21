"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _cornerRadius = _interopRequireDefault(require("../../theme/size/cornerRadius"));
var _BaseRadioButton = require("../base/BaseRadioButton");
var _useCheckboxStates = _interopRequireDefault(require("./hooks/useCheckboxStates"));
var _size = _interopRequireDefault(require("../../theme/size"));
var _icons = _interopRequireDefault(require("../../icons"));
var _themeContext = require("../../theme/themeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CheckboxButtonComponent = props => {
  const {
    size = 'MEDIUM',
    disabled = false,
    checked = false,
    indeterminate = false,
    type = 'SQUARE',
    label = '',
    textState = 'DEFAULT'
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const {
    onPressIn,
    onPressOut,
    customStyles,
    textVariant
  } = (0, _useCheckboxStates.default)({
    disabled,
    checked,
    indeterminate,
    size,
    textState
  });
  const {
    outerContainerStyle = {},
    iconStyle
  } = customStyles ?? {};
  const {
    color: iconColor
  } = iconStyle;
  const iconStyleKey = `${size}_ICON`;
  const renderIcon = () => {
    const iconStyles = st[iconStyleKey];
    if (checked) {
      return /*#__PURE__*/_react.default.createElement(_icons.default.CheckOutlined, _extends({}, iconStyles ?? {}, {
        color: iconColor
      }));
    } else if (indeterminate) {
      return /*#__PURE__*/_react.default.createElement(_icons.default.MinusOutlined, _extends({}, iconStyles ?? {}, {
        color: iconColor
      }));
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  };
  return /*#__PURE__*/_react.default.createElement(_BaseRadioButton.BaseRadioButton, _extends({}, props, {
    checked: checked,
    onPressIn: onPressIn,
    onPressOut: onPressOut,
    outerContainerStyle: [st[size], st[type], outerContainerStyle],
    label: label,
    labelVariant: textVariant,
    labelFontColor: colors.text.defaultPrimary
  }), renderIcon());
};
const Checkbox = exports.Checkbox = /*#__PURE__*/_react.default.memo(CheckboxButtonComponent);
const st = _reactNative.StyleSheet.create({
  SMALL: {
    height: _size.default.Size.size16,
    width: _size.default.Size.size16,
    borderRadius: _cornerRadius.default.cornerRadius4
  },
  MEDIUM: {
    height: _size.default.Size.size20,
    width: _size.default.Size.size20,
    borderRadius: _cornerRadius.default.cornerRadius4
  },
  SMALL_ICON: {
    height: _size.default.Size.size10,
    width: _size.default.Size.size10
  },
  MEDIUM_ICON: {
    height: _size.default.IconSize.iconSize14,
    width: _size.default.IconSize.iconSize14
  },
  CIRCLE: {
    borderRadius: _size.default.CornerRadius.cornerRadiusFull
  },
  SQUARE: {}
});
//# sourceMappingURL=index.js.map