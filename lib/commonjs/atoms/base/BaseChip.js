"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _icons = _interopRequireDefault(require("../../icons"));
var _size = _interopRequireDefault(require("../../theme/size"));
var _text = require("../../typography/text");
var _Tags = require("../Tags");
var _types = require("../Tags/types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BaseChip = props => {
  const {
    onPress,
    leftIcon,
    containerStyle,
    labelColor,
    label,
    rightIcon,
    withBadge,
    withCross,
    disabled,
    tagsProps,
    subLabel
  } = props ?? {};
  const showLeftIcon = !!leftIcon && !withBadge;
  const showRightIcon = !!rightIcon && !withCross;
  const renderIcon = icon => {
    if (!icon) return null;
    return /*#__PURE__*/_react.default.cloneElement(icon, {
      color: labelColor
    });
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    disabled: disabled,
    onPress: onPress,
    style: [st.main, containerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.content
  }, withBadge && /*#__PURE__*/_react.default.createElement(_Tags.Tags, _extends({
    appearance: _types.AppearanceEnum.PRIMARY,
    label: 0
  }, tagsProps, {
    style: st.badgeMargin
  })), showLeftIcon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.leftIcon
  }, renderIcon(leftIcon)), /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: _text.TextToken.label4_medium,
    fontColor: labelColor
  }, label), showRightIcon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.rightIcon
  }, renderIcon(rightIcon)), withCross && /*#__PURE__*/_react.default.createElement(_icons.default.Close, {
    style: st.rightIcon,
    color: labelColor
  })), !!subLabel && /*#__PURE__*/_react.default.createElement(_text.Text, {
    style: st.subLabelStyle
    // To be updated in DLS
    ,
    variant: _text.TextToken.label3_medium,
    fontColor: labelColor
  }, subLabel));
};
const st = _reactNative.StyleSheet.create({
  main: {
    paddingHorizontal: _size.default.Space.space10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftIcon: {
    marginRight: _size.default.Space.space4,
    width: _size.default.Size.size16,
    height: _size.default.Size.size16,
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
  badgeMargin: {
    marginRight: _size.default.Space.space4
  },
  subLabelStyle: {
    marginTop: _size.default.Space.space8
  }
});
var _default = exports.default = BaseChip;
//# sourceMappingURL=BaseChip.js.map