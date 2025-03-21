"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _size = _interopRequireDefault(require("../../theme/size"));
var _text = require("../../typography/text");
var _icons = _interopRequireDefault(require("../../icons"));
var _IconButton = require("../IconButton");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BaseAlert = props => {
  const {
    containerStyle,
    textColor,
    iconColor,
    title,
    desc,
    leftIcon,
    rightIcon,
    showCross,
    onPress
  } = props;
  const renderIcon = icon => {
    if (!icon) return null;
    return /*#__PURE__*/_react.default.cloneElement(icon, {
      color: iconColor
    });
  };
  const getRightMostIcon = () => {
    return rightIcon ? renderIcon(rightIcon) : showCross && /*#__PURE__*/_react.default.createElement(_icons.default.Close, {
      style: styles.rightIcon,
      color: iconColor
    });
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.main, containerStyle]
  }, !!leftIcon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.leftIcon
  }, renderIcon(leftIcon)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.flex
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: _text.TextTokenV3.medium_250,
    numberOfLines: 1,
    fontColor: textColor
  }, title), !!desc && /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: _text.TextTokenV3.regular_250,
    style: styles.descText,
    fontColor: textColor
  }, desc)), (showCross || !!rightIcon) && /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    type: "WITHOUT_BG",
    size: "SMALL",
    variant: "SQUARE",
    onPress: onPress,
    icon: getRightMostIcon() || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)
  }));
};
var _default = exports.default = BaseAlert;
const styles = _reactNative.StyleSheet.create({
  flex: {
    flex: 1
  },
  main: {
    padding: _size.default.Space.space12,
    borderRadius: _size.default.CornerRadius.cornerRadius8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftIcon: {
    marginRight: _size.default.Space.space10,
    width: _size.default.IconSize.iconSize20,
    height: _size.default.IconSize.iconSize20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightIcon: {
    marginLeft: _size.default.Space.space4,
    width: _size.default.Size.size16,
    height: _size.default.Size.size16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descText: {
    flex: 1,
    marginTop: _size.default.Space.space4
  }
});
//# sourceMappingURL=BaseAlert.js.map