function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { BaseFileUpload } from '../base/BaseFileUpload';
import useFileUploadStates from './hooks/useFileUploadStates';
const FileUploadComponent = props => {
  const {
    state
  } = props;
  const {
    customStyles = {},
    onPressIn,
    onPressOut
  } = useFileUploadStates({
    state
  });
  const {
    titleColor = '',
    subtitleColor = '',
    subtitleFontStyle = '',
    iconColor = '',
    ...styles
  } = customStyles;
  return /*#__PURE__*/React.createElement(BaseFileUpload, _extends({}, props, {
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
const FileUpload = /*#__PURE__*/React.memo(FileUploadComponent);
export { FileUpload };
//# sourceMappingURL=index.js.map