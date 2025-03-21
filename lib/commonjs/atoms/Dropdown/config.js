"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDropdownStylingBasedOnProps = void 0;
var _text = require("../../typography/text");
const fetchDropdownStylingBasedOnProps = ({
  isDisabled,
  colors,
  isSelected
}) => {
  const disabledStyles = {
    labelFontColor: 'defaultSecondary',
    valueFontColor: 'defaultDisabled',
    labelVariant: _text.TextTokenV3.medium_250,
    valueVariant: _text.TextTokenV3.regular_250,
    borderColor: colors.border.defaultDisabled
  };
  const regularStyles = {
    labelFontColor: 'defaultPrimary',
    valueFontColor: 'defaultPrimary',
    labelVariant: _text.TextTokenV3.medium_250,
    valueVariant: _text.TextTokenV3.regular_250,
    borderColor: colors.border.defaultPrimary
  };
  const unSelectedStyles = {
    labelFontColor: 'defaultPrimary',
    valueFontColor: 'defaultTertiary',
    labelVariant: _text.TextTokenV3.medium_250,
    valueVariant: _text.TextTokenV3.regular_250,
    borderColor: colors.border.defaultPrimary
  };
  const positiveStyle = isSelected ? regularStyles : unSelectedStyles;
  return isDisabled ? disabledStyles : positiveStyle;
};
exports.fetchDropdownStylingBasedOnProps = fetchDropdownStylingBasedOnProps;
//# sourceMappingURL=config.js.map