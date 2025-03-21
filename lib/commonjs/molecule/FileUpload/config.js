"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATE_TYPE = void 0;
var _text = require("../../typography/text");
const STATE_TYPE = themeColor => {
  const DEFAULT = {
    borderStyle: 'dashed',
    borderColor: themeColor.border.defaultPrimary,
    backgroundColor: themeColor.bgFill.defaultPrimary,
    titleColor: themeColor.text.defaultPrimary,
    subtitleColor: themeColor.text.defaultSecondary,
    iconColor: themeColor.icon.defaultPrimary
  };
  const PRESSED = {
    borderStyle: 'dashed',
    borderColor: themeColor.border.defaultBrand,
    backgroundColor: themeColor.bgFill.defaultPrimary,
    iconColor: themeColor.icon.brand
  };
  const DISABLED = {
    borderStyle: 'dashed',
    borderColor: themeColor.border.defaultDisabled,
    backgroundColor: themeColor.bgFill.defaultDisabled,
    titleColor: themeColor.text.defaultDisabled,
    subtitleColor: themeColor.text.defaultDisabled,
    iconColor: themeColor.icon.defaultDisabled
  };
  const UPLOADING = {
    borderStyle: 'solid',
    borderColor: themeColor.border.defaultPrimary,
    subtitleColor: themeColor.text.defaultSecondary,
    subtitleFontStyle: _text.TextToken.tiny_regular
  };
  const UPLOAD_FAILED = {
    ...UPLOADING,
    subtitleColor: themeColor.text.stateError,
    subtitleFontStyle: _text.TextToken.tiny_medium
  };
  const UPLOAD_COMPLETE = {
    ...UPLOADING,
    subtitleColor: themeColor.text.stateSuccess,
    subtitleFontStyle: _text.TextToken.tiny_medium
  };
  const CUSTOM = {
    ...DEFAULT,
    borderStyle: 'solid'
  };
  return {
    DEFAULT,
    PRESSED,
    DISABLED,
    UPLOADING,
    UPLOAD_FAILED,
    UPLOAD_COMPLETE,
    CUSTOM
  };
};
exports.STATE_TYPE = STATE_TYPE;
//# sourceMappingURL=config.js.map