"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseFileUpload = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _atoms = require("../../atoms");
var _icons = _interopRequireDefault(require("../../icons"));
var _size = _interopRequireDefault(require("../../theme/size"));
var _themeContext = require("../../theme/themeContext");
var _text = require("../../typography/text");
var _types = require("../FileUpload/types");
var _locale = _interopRequireDefault(require("../../locale"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FileUploadProgress = /*#__PURE__*/_react.default.memo(({
  st,
  title = '',
  subtitle = '',
  colors,
  state,
  customStyle,
  retryButtonText = '',
  handleStopUpload,
  handleRetryUpload,
  handleRemoveUpload,
  handleViewDocument,
  progressBarProps,
  showEditButton = false,
  handleEditDocument,
  showDeleteButton = true,
  customBadge,
  showFilePreview
}) => {
  const isUploadCompleted = state === _types.STATE_TYPES.UPLOAD_COMPLETE;
  const isUploading = state === _types.STATE_TYPES.UPLOADING;
  const showProgressbar = !isUploadCompleted && isUploading;
  const LeftIconComponent = (0, _react.useCallback)(() => {
    if (state === _types.STATE_TYPES.UPLOAD_COMPLETE || state === _types.STATE_TYPES.CUSTOM && showFilePreview) {
      return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
        onPress: handleViewDocument,
        style: st.FUProgressPrefix
      }, /*#__PURE__*/_react.default.createElement(_icons.default.EyeShow, null));
    }
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: st.filesIconContainer
    }, /*#__PURE__*/_react.default.createElement(_icons.default.FilesFilled, {
      width: _size.default.Space.space20,
      height: _size.default.Space.space20,
      color: colors === null || colors === void 0 ? void 0 : colors.icon.accent
    }));
  }, [state, showFilePreview, st, colors === null || colors === void 0 ? void 0 : colors.icon.accent, handleViewDocument]);
  const RightIconComponent = (0, _react.useCallback)(() => {
    switch (state) {
      case _types.STATE_TYPES.UPLOAD_FAILED:
        return /*#__PURE__*/_react.default.createElement(_atoms.LinkButton, {
          onPress: handleRetryUpload,
          rightIcon: /*#__PURE__*/_react.default.createElement(_icons.default.ClockwiseTwo, null),
          title: retryButtonText,
          size: 'SMALL',
          type: "BRAND"
        });
      case _types.STATE_TYPES.UPLOAD_COMPLETE:
        if (!showDeleteButton) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
        return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
          onPress: handleRemoveUpload,
          style: st.marginLeftFour
        }, /*#__PURE__*/_react.default.createElement(_icons.default.Trash, null));
      case _types.STATE_TYPES.CUSTOM:
        if (!retryButtonText) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
        return /*#__PURE__*/_react.default.createElement(_atoms.LinkButton, {
          onPress: handleRetryUpload,
          rightIcon: /*#__PURE__*/_react.default.createElement(_icons.default.ClockwiseTwo, null),
          title: retryButtonText,
          size: 'SMALL',
          type: "BRAND"
        });
      default:
        return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
          onPress: handleStopUpload,
          style: st.marginLeftFour
        }, /*#__PURE__*/_react.default.createElement(_icons.default.CloseCircle, null));
    }
  }, [state, handleRemoveUpload, handleStopUpload, handleRetryUpload, retryButtonText, st, showDeleteButton]);
  const SubTitleComponent = (0, _react.useCallback)(() => {
    switch (state) {
      case _types.STATE_TYPES.UPLOAD_COMPLETE:
        return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
          style: st.badgeContainer
        }, /*#__PURE__*/_react.default.createElement(_atoms.Badge, {
          textState: "secondary",
          variant: 'success',
          text: _locale.default.UPLOAD_COMPLETE,
          type: "light",
          icon: /*#__PURE__*/_react.default.createElement(_icons.default.CheckCircleOutlined, {
            width: _size.default.IconSize.iconSize12,
            height: _size.default.IconSize.iconSize12,
            color: colors === null || colors === void 0 ? void 0 : colors.icon.success
          })
        }));
      case _types.STATE_TYPES.UPLOAD_FAILED:
        return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
          style: st.badgeContainer
        }, /*#__PURE__*/_react.default.createElement(_atoms.Badge, {
          textState: "secondary",
          variant: 'error',
          text: _locale.default.UPLOAD_FAILED,
          type: "light",
          icon: /*#__PURE__*/_react.default.createElement(_icons.default.WarningOutlined, {
            width: _size.default.IconSize.iconSize12,
            height: _size.default.IconSize.iconSize12,
            color: colors === null || colors === void 0 ? void 0 : colors.icon.error
          })
        }));
      case _types.STATE_TYPES.CUSTOM:
        return !!customBadge && customBadge.type === _atoms.Badge ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
          style: st.badgeContainer
        }, customBadge) : null;
      default:
        return /*#__PURE__*/_react.default.createElement(_text.Text, {
          style: !isUploading && st.FUProgressSubtile,
          numberOfLines: 1,
          ellipsizeMode: "tail",
          fontColor: customStyle === null || customStyle === void 0 ? void 0 : customStyle.subtitleColor,
          variant: (customStyle === null || customStyle === void 0 ? void 0 : customStyle.subtitleFontStyle) ?? _text.TextTokenV3.regular_150
        }, subtitle);
    }
  }, [colors, customBadge, customStyle, isUploading, st, state, subtitle]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.FUProgressContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.FUProgressContent
  }, /*#__PURE__*/_react.default.createElement(LeftIconComponent, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.FUProgressTextContent
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.FUProgressTitleContainer
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    numberOfLines: 1,
    ellipsizeMode: "tail",
    style: st.expand,
    fontColor: colors === null || colors === void 0 ? void 0 : colors.text.defaultPrimary,
    variant: _text.TextTokenV3.semibold_200
  }, title)), /*#__PURE__*/_react.default.createElement(SubTitleComponent, null), showEditButton && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.editBtn
  }, /*#__PURE__*/_react.default.createElement(_atoms.LinkButton, {
    title: "Edit",
    underline: false,
    type: "BRAND",
    size: "SMALL",
    rightIcon: /*#__PURE__*/_react.default.createElement(_icons.default.EditFilled, null),
    onPress: handleEditDocument
  })))), /*#__PURE__*/_react.default.createElement(RightIconComponent, null)), showProgressbar && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.progressBarContainer
  }, /*#__PURE__*/_react.default.createElement(_atoms.ProgressBar, progressBarProps)));
});
const FileUploadBase = /*#__PURE__*/_react.default.memo(({
  linkBtnText = '',
  title = '',
  subtitle = '',
  isDisabled,
  customStyle,
  st,
  onPress
}) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
  style: st.alignCenter
}, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
  style: st.alignCenter
}, /*#__PURE__*/_react.default.createElement(_icons.default.UploadSimple, {
  color: customStyle === null || customStyle === void 0 ? void 0 : customStyle.iconColor
}), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
  style: st.FUDefaultTitleContainer
}, /*#__PURE__*/_react.default.createElement(_atoms.LinkButton, {
  onPress: onPress,
  disabled: isDisabled,
  title: linkBtnText,
  size: 'MEDIUM',
  type: "BRAND"
}), /*#__PURE__*/_react.default.createElement(_text.Text, {
  numberOfLines: 1,
  ellipsizeMode: "tail",
  fontColor: customStyle === null || customStyle === void 0 ? void 0 : customStyle.titleColor,
  variant: _text.TextTokenV3.regular_200
}, title))), /*#__PURE__*/_react.default.createElement(_text.Text, {
  style: st.FUDefaultSubtitleContainer,
  numberOfLines: 1,
  ellipsizeMode: "tail",
  fontColor: customStyle === null || customStyle === void 0 ? void 0 : customStyle.subtitleColor,
  variant: _text.TextTokenV3.regular_150
}, subtitle)));
const BaseFileUploadComponent = props => {
  const {
    state,
    title,
    subtitle,
    containerStyle,
    customStyle,
    errorMessage = '',
    linkBtnText,
    retryButtonText,
    handleStopUpload,
    handleRetryUpload,
    handleRemoveUpload,
    handleViewDocument,
    progressBarProps,
    handleEditDocument,
    showDeleteButton,
    showEditButton,
    onPress,
    label,
    isMandatory,
    customBadge,
    showFilePreview,
    ...pressableProps
  } = props;
  const {
    colors
  } = (0, _themeContext.useTheme)();
  const st = (0, _react.useMemo)(() => styles(colors), [colors]);
  const showUploadBase = state === _types.STATE_TYPES.DEFAULT || state === _types.STATE_TYPES.DISABLED || state === _types.STATE_TYPES.ERROR || !state;
  const isDisabled = !showUploadBase || state === _types.STATE_TYPES.DISABLED;
  const showErrorMessage = state === _types.STATE_TYPES.ERROR && errorMessage;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, label ? /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: _text.TextTokenV3.medium_250,
    fontColor: colors.text.defaultPrimary,
    style: st.label
  }, label, isMandatory ? /*#__PURE__*/_react.default.createElement(_text.Text, {
    variant: _text.TextTokenV3.medium_250,
    fontColor: colors.text.stateError,
    style: st.label
  }, "*") : null) : null, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, _extends({
    disabled: isDisabled,
    onPress: onPress
  }, pressableProps, {
    style: [st.base, containerStyle]
  }), showUploadBase ? /*#__PURE__*/_react.default.createElement(FileUploadBase, {
    st: st,
    customStyle: customStyle,
    isDisabled: state === _types.STATE_TYPES.DISABLED,
    linkBtnText: linkBtnText,
    title: title,
    subtitle: subtitle,
    onPress: onPress
  }) : /*#__PURE__*/_react.default.createElement(FileUploadProgress, {
    st: st,
    title: title,
    subtitle: subtitle,
    colors: colors,
    state: state,
    customStyle: customStyle,
    retryButtonText: retryButtonText,
    handleStopUpload: handleStopUpload,
    handleRetryUpload: handleRetryUpload,
    handleRemoveUpload: handleRemoveUpload,
    handleViewDocument: handleViewDocument,
    progressBarProps: progressBarProps,
    handleEditDocument: handleEditDocument,
    showEditButton: showEditButton,
    showDeleteButton: showDeleteButton,
    customBadge: customBadge,
    showFilePreview: showFilePreview
  })), showErrorMessage && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: st.errorMessageContainer
  }, /*#__PURE__*/_react.default.createElement(_icons.default.Info, null), /*#__PURE__*/_react.default.createElement(_text.Text, {
    style: st.errorMessage,
    numberOfLines: 1,
    ellipsizeMode: "tail",
    fontColor: colors.text.stateError,
    variant: _text.TextTokenV3.regular_200
  }, errorMessage)));
};
const BaseFileUpload = exports.BaseFileUpload = /*#__PURE__*/_react.default.memo(BaseFileUploadComponent);
const styles = colors => _reactNative.StyleSheet.create({
  base: {
    height: 82,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.2,
    padding: _size.default.Space.space12,
    backgroundColor: colors.bgFill.defaultPrimaryII,
    borderRadius: _size.default.CornerRadius.cornerRadius8
  },
  errorMessage: {
    textAlign: 'left',
    marginLeft: _size.default.Space.space4
  },
  alignCenter: {
    alignItems: 'center'
  },
  FUDefaultTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _size.default.Space.space4
  },
  FUDefaultSubtitleContainer: {
    marginTop: _size.default.Space.space4,
    textAlign: 'center'
  },
  FUProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  FUProgressContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  FUProgressPrefix: {
    height: 32,
    width: 32,
    borderRadius: _size.default.CornerRadius.cornerRadius4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgSurface.overlayPrimary
  },
  FUProgressTextContent: {
    marginLeft: _size.default.Space.space8,
    flex: 1
  },
  FUProgressTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: _size.default.Space.space4
  },
  FUProgressSubtile: {
    marginTop: _size.default.Space.space4
  },
  errorMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _size.default.Space.space6
  },
  marginLeftFour: {
    marginLeft: _size.default.Space.space4
  },
  progressBarContainer: {
    padding: 1,
    marginTop: _size.default.Space.space8,
    width: '100%'
  },
  editBtn: {
    marginTop: _size.default.Space.space4
  },
  expand: {
    flex: 1
  },
  label: {
    marginBottom: _size.default.Space.space4
  },
  badgeContainer: {
    alignItems: 'flex-start',
    marginTop: _size.default.Space.space4
  },
  filesIconContainer: {
    padding: _size.default.Space.space6,
    backgroundColor: colors.bgFill.accentSecondary,
    borderRadius: _size.default.CornerRadius.cornerRadius4
  }
});
//# sourceMappingURL=BaseFileUpload.js.map