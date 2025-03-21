function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback, useMemo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Badge, LinkButton, ProgressBar } from '../../atoms';
import Svgs from '../../icons';
import themeConfig from '../../theme/size';
import { useTheme } from '../../theme/themeContext';
import { Text, TextTokenV3 } from '../../typography/text';
import { STATE_TYPES } from '../FileUpload/types';
import size from '../../theme/size';
import Locale from '../../locale';
const FileUploadProgress = /*#__PURE__*/React.memo(({
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
  const isUploadCompleted = state === STATE_TYPES.UPLOAD_COMPLETE;
  const isUploading = state === STATE_TYPES.UPLOADING;
  const showProgressbar = !isUploadCompleted && isUploading;
  const LeftIconComponent = useCallback(() => {
    if (state === STATE_TYPES.UPLOAD_COMPLETE || state === STATE_TYPES.CUSTOM && showFilePreview) {
      return /*#__PURE__*/React.createElement(Pressable, {
        onPress: handleViewDocument,
        style: st.FUProgressPrefix
      }, /*#__PURE__*/React.createElement(Svgs.EyeShow, null));
    }
    return /*#__PURE__*/React.createElement(View, {
      style: st.filesIconContainer
    }, /*#__PURE__*/React.createElement(Svgs.FilesFilled, {
      width: size.Space.space20,
      height: size.Space.space20,
      color: colors === null || colors === void 0 ? void 0 : colors.icon.accent
    }));
  }, [state, showFilePreview, st, colors === null || colors === void 0 ? void 0 : colors.icon.accent, handleViewDocument]);
  const RightIconComponent = useCallback(() => {
    switch (state) {
      case STATE_TYPES.UPLOAD_FAILED:
        return /*#__PURE__*/React.createElement(LinkButton, {
          onPress: handleRetryUpload,
          rightIcon: /*#__PURE__*/React.createElement(Svgs.ClockwiseTwo, null),
          title: retryButtonText,
          size: 'SMALL',
          type: "BRAND"
        });
      case STATE_TYPES.UPLOAD_COMPLETE:
        if (!showDeleteButton) return /*#__PURE__*/React.createElement(React.Fragment, null);
        return /*#__PURE__*/React.createElement(Pressable, {
          onPress: handleRemoveUpload,
          style: st.marginLeftFour
        }, /*#__PURE__*/React.createElement(Svgs.Trash, null));
      case STATE_TYPES.CUSTOM:
        if (!retryButtonText) return /*#__PURE__*/React.createElement(React.Fragment, null);
        return /*#__PURE__*/React.createElement(LinkButton, {
          onPress: handleRetryUpload,
          rightIcon: /*#__PURE__*/React.createElement(Svgs.ClockwiseTwo, null),
          title: retryButtonText,
          size: 'SMALL',
          type: "BRAND"
        });
      default:
        return /*#__PURE__*/React.createElement(Pressable, {
          onPress: handleStopUpload,
          style: st.marginLeftFour
        }, /*#__PURE__*/React.createElement(Svgs.CloseCircle, null));
    }
  }, [state, handleRemoveUpload, handleStopUpload, handleRetryUpload, retryButtonText, st, showDeleteButton]);
  const SubTitleComponent = useCallback(() => {
    switch (state) {
      case STATE_TYPES.UPLOAD_COMPLETE:
        return /*#__PURE__*/React.createElement(View, {
          style: st.badgeContainer
        }, /*#__PURE__*/React.createElement(Badge, {
          textState: "secondary",
          variant: 'success',
          text: Locale.UPLOAD_COMPLETE,
          type: "light",
          icon: /*#__PURE__*/React.createElement(Svgs.CheckCircleOutlined, {
            width: size.IconSize.iconSize12,
            height: size.IconSize.iconSize12,
            color: colors === null || colors === void 0 ? void 0 : colors.icon.success
          })
        }));
      case STATE_TYPES.UPLOAD_FAILED:
        return /*#__PURE__*/React.createElement(View, {
          style: st.badgeContainer
        }, /*#__PURE__*/React.createElement(Badge, {
          textState: "secondary",
          variant: 'error',
          text: Locale.UPLOAD_FAILED,
          type: "light",
          icon: /*#__PURE__*/React.createElement(Svgs.WarningOutlined, {
            width: size.IconSize.iconSize12,
            height: size.IconSize.iconSize12,
            color: colors === null || colors === void 0 ? void 0 : colors.icon.error
          })
        }));
      case STATE_TYPES.CUSTOM:
        return !!customBadge && customBadge.type === Badge ? /*#__PURE__*/React.createElement(View, {
          style: st.badgeContainer
        }, customBadge) : null;
      default:
        return /*#__PURE__*/React.createElement(Text, {
          style: !isUploading && st.FUProgressSubtile,
          numberOfLines: 1,
          ellipsizeMode: "tail",
          fontColor: customStyle === null || customStyle === void 0 ? void 0 : customStyle.subtitleColor,
          variant: (customStyle === null || customStyle === void 0 ? void 0 : customStyle.subtitleFontStyle) ?? TextTokenV3.regular_150
        }, subtitle);
    }
  }, [colors, customBadge, customStyle, isUploading, st, state, subtitle]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
    style: st.FUProgressContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: st.FUProgressContent
  }, /*#__PURE__*/React.createElement(LeftIconComponent, null), /*#__PURE__*/React.createElement(View, {
    style: st.FUProgressTextContent
  }, /*#__PURE__*/React.createElement(View, {
    style: st.FUProgressTitleContainer
  }, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    ellipsizeMode: "tail",
    style: st.expand,
    fontColor: colors === null || colors === void 0 ? void 0 : colors.text.defaultPrimary,
    variant: TextTokenV3.semibold_200
  }, title)), /*#__PURE__*/React.createElement(SubTitleComponent, null), showEditButton && /*#__PURE__*/React.createElement(View, {
    style: st.editBtn
  }, /*#__PURE__*/React.createElement(LinkButton, {
    title: "Edit",
    underline: false,
    type: "BRAND",
    size: "SMALL",
    rightIcon: /*#__PURE__*/React.createElement(Svgs.EditFilled, null),
    onPress: handleEditDocument
  })))), /*#__PURE__*/React.createElement(RightIconComponent, null)), showProgressbar && /*#__PURE__*/React.createElement(View, {
    style: st.progressBarContainer
  }, /*#__PURE__*/React.createElement(ProgressBar, progressBarProps)));
});
const FileUploadBase = /*#__PURE__*/React.memo(({
  linkBtnText = '',
  title = '',
  subtitle = '',
  isDisabled,
  customStyle,
  st,
  onPress
}) => /*#__PURE__*/React.createElement(View, {
  style: st.alignCenter
}, /*#__PURE__*/React.createElement(View, {
  style: st.alignCenter
}, /*#__PURE__*/React.createElement(Svgs.UploadSimple, {
  color: customStyle === null || customStyle === void 0 ? void 0 : customStyle.iconColor
}), /*#__PURE__*/React.createElement(View, {
  style: st.FUDefaultTitleContainer
}, /*#__PURE__*/React.createElement(LinkButton, {
  onPress: onPress,
  disabled: isDisabled,
  title: linkBtnText,
  size: 'MEDIUM',
  type: "BRAND"
}), /*#__PURE__*/React.createElement(Text, {
  numberOfLines: 1,
  ellipsizeMode: "tail",
  fontColor: customStyle === null || customStyle === void 0 ? void 0 : customStyle.titleColor,
  variant: TextTokenV3.regular_200
}, title))), /*#__PURE__*/React.createElement(Text, {
  style: st.FUDefaultSubtitleContainer,
  numberOfLines: 1,
  ellipsizeMode: "tail",
  fontColor: customStyle === null || customStyle === void 0 ? void 0 : customStyle.subtitleColor,
  variant: TextTokenV3.regular_150
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
  } = useTheme();
  const st = useMemo(() => styles(colors), [colors]);
  const showUploadBase = state === STATE_TYPES.DEFAULT || state === STATE_TYPES.DISABLED || state === STATE_TYPES.ERROR || !state;
  const isDisabled = !showUploadBase || state === STATE_TYPES.DISABLED;
  const showErrorMessage = state === STATE_TYPES.ERROR && errorMessage;
  return /*#__PURE__*/React.createElement(View, null, label ? /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.medium_250,
    fontColor: colors.text.defaultPrimary,
    style: st.label
  }, label, isMandatory ? /*#__PURE__*/React.createElement(Text, {
    variant: TextTokenV3.medium_250,
    fontColor: colors.text.stateError,
    style: st.label
  }, "*") : null) : null, /*#__PURE__*/React.createElement(Pressable, _extends({
    disabled: isDisabled,
    onPress: onPress
  }, pressableProps, {
    style: [st.base, containerStyle]
  }), showUploadBase ? /*#__PURE__*/React.createElement(FileUploadBase, {
    st: st,
    customStyle: customStyle,
    isDisabled: state === STATE_TYPES.DISABLED,
    linkBtnText: linkBtnText,
    title: title,
    subtitle: subtitle,
    onPress: onPress
  }) : /*#__PURE__*/React.createElement(FileUploadProgress, {
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
  })), showErrorMessage && /*#__PURE__*/React.createElement(View, {
    style: st.errorMessageContainer
  }, /*#__PURE__*/React.createElement(Svgs.Info, null), /*#__PURE__*/React.createElement(Text, {
    style: st.errorMessage,
    numberOfLines: 1,
    ellipsizeMode: "tail",
    fontColor: colors.text.stateError,
    variant: TextTokenV3.regular_200
  }, errorMessage)));
};
const BaseFileUpload = /*#__PURE__*/React.memo(BaseFileUploadComponent);
export { BaseFileUpload };
const styles = colors => StyleSheet.create({
  base: {
    height: 82,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.2,
    padding: themeConfig.Space.space12,
    backgroundColor: colors.bgFill.defaultPrimaryII,
    borderRadius: themeConfig.CornerRadius.cornerRadius8
  },
  errorMessage: {
    textAlign: 'left',
    marginLeft: themeConfig.Space.space4
  },
  alignCenter: {
    alignItems: 'center'
  },
  FUDefaultTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: themeConfig.Space.space4
  },
  FUDefaultSubtitleContainer: {
    marginTop: themeConfig.Space.space4,
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
    borderRadius: themeConfig.CornerRadius.cornerRadius4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgSurface.overlayPrimary
  },
  FUProgressTextContent: {
    marginLeft: themeConfig.Space.space8,
    flex: 1
  },
  FUProgressTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: themeConfig.Space.space4
  },
  FUProgressSubtile: {
    marginTop: themeConfig.Space.space4
  },
  errorMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: themeConfig.Space.space6
  },
  marginLeftFour: {
    marginLeft: themeConfig.Space.space4
  },
  progressBarContainer: {
    padding: 1,
    marginTop: themeConfig.Space.space8,
    width: '100%'
  },
  editBtn: {
    marginTop: size.Space.space4
  },
  expand: {
    flex: 1
  },
  label: {
    marginBottom: size.Space.space4
  },
  badgeContainer: {
    alignItems: 'flex-start',
    marginTop: size.Space.space4
  },
  filesIconContainer: {
    padding: size.Space.space6,
    backgroundColor: colors.bgFill.accentSecondary,
    borderRadius: size.CornerRadius.cornerRadius4
  }
});
//# sourceMappingURL=BaseFileUpload.js.map