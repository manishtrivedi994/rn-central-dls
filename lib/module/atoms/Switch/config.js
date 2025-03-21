import { Sizes } from 'rn-central-dls';
const switchConfig = {
  small: {
    circleDiameter: Sizes.Size.size16,
    switchContainerWidth: Sizes.Size.size28,
    switchContanerHeight: Sizes.Size.size16
  },
  medium: {
    circleDiameter: Sizes.Size.size20,
    switchContainerWidth: Sizes.Size.size34,
    switchContanerHeight: Sizes.Size.size20
  }
};
export const getSwitchStyles = ({
  colors,
  variant
}) => {
  const switchStyles = {
    default: {
      labelColor: colors.text.defaultPrimary,
      descriptionColor: colors.text.defaultSecondary,
      switchColor: colors.bgFill.brand,
      haveTick: true
    },
    critical: {
      labelColor: colors.text.defaultPrimary,
      descriptionColor: colors.text.defaultSecondary,
      switchColor: colors.bgFill.stateError,
      haveTick: false
    },
    disabled: {
      labelColor: colors.text.defaultDisabled,
      descriptionColor: colors.text.defaultDisabled,
      switchColor: colors.bgFill.defaultDisabled,
      haveTick: false
    }
  };
  return switchStyles[variant] ?? switchStyles.default;
};
export const getSwitchConfig = ({
  color,
  size
}) => {
  const config = switchConfig[size] ?? switchConfig.medium;
  const circleContainerStyle = {
    height: config.switchContanerHeight,
    width: config.switchContainerWidth,
    backgroundColor: color
  };
  const circleStyle = {
    height: config.circleDiameter,
    width: config.circleDiameter,
    borderRadius: config.circleDiameter / 2
  };
  return {
    config,
    circleContainerStyle,
    circleStyle
  };
};
//# sourceMappingURL=config.js.map