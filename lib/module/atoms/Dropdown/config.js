import { TextTokenV3 } from '../../typography/text';
export const fetchDropdownStylingBasedOnProps = ({
  isDisabled,
  colors,
  isSelected
}) => {
  const disabledStyles = {
    labelFontColor: 'defaultSecondary',
    valueFontColor: 'defaultDisabled',
    labelVariant: TextTokenV3.medium_250,
    valueVariant: TextTokenV3.regular_250,
    borderColor: colors.border.defaultDisabled
  };
  const regularStyles = {
    labelFontColor: 'defaultPrimary',
    valueFontColor: 'defaultPrimary',
    labelVariant: TextTokenV3.medium_250,
    valueVariant: TextTokenV3.regular_250,
    borderColor: colors.border.defaultPrimary
  };
  const unSelectedStyles = {
    labelFontColor: 'defaultPrimary',
    valueFontColor: 'defaultTertiary',
    labelVariant: TextTokenV3.medium_250,
    valueVariant: TextTokenV3.regular_250,
    borderColor: colors.border.defaultPrimary
  };
  const positiveStyle = isSelected ? regularStyles : unSelectedStyles;
  return isDisabled ? disabledStyles : positiveStyle;
};
//# sourceMappingURL=config.js.map