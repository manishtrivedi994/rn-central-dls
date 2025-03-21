"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchInfoStripStylingBasedOnProps = void 0;
var _size = _interopRequireDefault(require("../../theme/size"));
var _types = require("./types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const fetchInfoStripStylingBasedOnProps = ({
  type,
  colors,
  color
}) => {
  const config = {
    [_types.InfoStripColorEnum.info]: {
      backgroundColor: colors.bgFill.accentSecondary
    },
    [_types.InfoStripColorEnum.success]: {
      backgroundColor: colors.bgFill.stateSuccessSecondary
    },
    [_types.InfoStripColorEnum.warning]: {
      backgroundColor: colors.bgFill.stateWarningSecondary
    },
    [_types.InfoStripColorEnum.error]: {
      backgroundColor: colors.bgFill.stateErrorSecondary
    },
    [_types.InfoStripColorEnum.neutral]: {
      backgroundColor: colors.bgFill.defaultSecondary
    }
  };
  let variantFromConfig = config[color];
  if (variantFromConfig === undefined) {
    variantFromConfig = config[_types.InfoStripColorEnum.neutral];
  }
  const cornerStyle = {};
  const infoStripBaseStyle = {
    paddingHorizontal: _size.default.Space.space12,
    paddingVertical: _size.default.Space.space8,
    height: 'auto',
    justifyContent: 'flex-start'
  };
  if (type !== undefined) {
    if (type === _types.InfoStripTypeEnum.card) {
      cornerStyle.borderRadius = _size.default.CornerRadius.cornerRadius12;
    } else if (type === _types.InfoStripTypeEnum.endToEnd) {
      cornerStyle.borderRadius = _size.default.CornerRadius.cornerRadius0;
    }
  }
  return {
    icon: variantFromConfig.icon,
    textColor: colors.text.defaultPrimary,
    containerStyle: {
      backgroundColor: variantFromConfig.backgroundColor,
      ...infoStripBaseStyle,
      ...cornerStyle
    }
  };
};
exports.fetchInfoStripStylingBasedOnProps = fetchInfoStripStylingBasedOnProps;
//# sourceMappingURL=config.js.map