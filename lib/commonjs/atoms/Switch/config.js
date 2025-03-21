"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSwitchStyles = exports.getSwitchConfig = void 0;
var _rnCentralDls = require("rn-central-dls");
const switchConfig = {
  small: {
    circleDiameter: _rnCentralDls.Sizes.Size.size16,
    switchContainerWidth: _rnCentralDls.Sizes.Size.size28,
    switchContanerHeight: _rnCentralDls.Sizes.Size.size16
  },
  medium: {
    circleDiameter: _rnCentralDls.Sizes.Size.size20,
    switchContainerWidth: _rnCentralDls.Sizes.Size.size34,
    switchContanerHeight: _rnCentralDls.Sizes.Size.size20
  }
};
const getSwitchStyles = ({
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
exports.getSwitchStyles = getSwitchStyles;
const getSwitchConfig = ({
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
exports.getSwitchConfig = getSwitchConfig;
//# sourceMappingURL=config.js.map