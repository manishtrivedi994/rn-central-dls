"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseButton = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireWildcard(require("react"));
var _text = require("../../typography/text");
var _size = _interopRequireDefault(require("../../theme/size"));
var _themeContext = require("../../theme/themeContext");
var _icons = _interopRequireDefault(require("../../icons"));
var _useRapidClickHandler = _interopRequireDefault(require("./hooks/useRapidClickHandler"));
var _BaseLoader = _interopRequireDefault(require("./BaseLoader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BaseButtonComponent = props => {
  const {
    isLoading = false,
    label,
    title,
    flipCaption = false,
    containerStyle,
    labelVariant,
    textVariant,
    fontColor,
    leftIcon = null,
    rightIcon,
    showBorder,
    iconSpacing = _size.default.Space.space8,
    textStyleContainer,
    labelStyleContainer,
    underline,
    onPress,
    disabled,
    throttle,
    isBorderRounded,
    ...pressableProps
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const {
    onRapidPressHandler
  } = (0, _useRapidClickHandler.default)({
    onPress,
    throttle
  });
  const {
    iconContainerLeft,
    iconContainerRight
  } = (0, _react.useMemo)(() => {
    return {
      iconContainerRight: {
        marginRight: iconSpacing
      },
      iconContainerLeft: {
        marginLeft: iconSpacing
      }
    };
  }, [iconSpacing]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, _extends({}, pressableProps, {
    onPress: onRapidPressHandler,
    disabled: disabled || isLoading,
    style: [st.base, showBorder && st.border, containerStyle, showBorder && {
      borderColor: colors.border.defaultPrimary
    }, isBorderRounded && st.borderRounded]
  }), /*#__PURE__*/_react.default.createElement(_BaseLoader.default, {
    isLoading: isLoading,
    containerStyle: st.absolute
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [st.btnTextContainer, isLoading && st.hidden]
  }, !!leftIcon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: iconContainerRight
  }, leftIcon), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [st.btnTextLineWrapper, flipCaption && st.reversed]
  }, !!label && /*#__PURE__*/_react.default.createElement(_text.Text, {
    numberOfLines: 1,
    ellipsizeMode: "tail",
    textAlign: "center",
    fontColor: fontColor,
    variant: labelVariant ?? _text.TextTokenV3.regular_150,
    style: labelStyleContainer
  }, label), /*#__PURE__*/_react.default.createElement(_text.Text, {
    numberOfLines: 1,
    ellipsizeMode: "tail",
    textAlign: "center",
    fontColor: fontColor,
    variant: textVariant,
    style: textStyleContainer
  }, title), underline && /*#__PURE__*/_react.default.createElement(_icons.default.DottedLine, {
    key: title,
    color: fontColor
  })), !!rightIcon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: iconContainerLeft
  }, rightIcon)));
};
const BaseButton = exports.BaseButton = /*#__PURE__*/_react.default.memo(BaseButtonComponent);
const st = _reactNative.StyleSheet.create({
  border: {
    borderWidth: 1
  },
  absolute: {
    position: 'absolute'
  },
  btnTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 1,
    flexShrink: 1
  },
  btnTextLineWrapper: {
    flexShrink: 1
  },
  base: {
    borderRadius: _size.default.CornerRadius.cornerRadius8,
    alignItems: 'center',
    paddingHorizontal: _size.default.Space.space16,
    flexDirection: 'row',
    justifyContent: 'center',
    flexShrink: 1
  },
  hidden: {
    opacity: 0
  },
  borderRounded: {
    borderRadius: _size.default.CornerRadius.cornerRadiusFull
  },
  reversed: {
    flexDirection: 'column-reverse'
  }
});
//# sourceMappingURL=BaseButton.js.map