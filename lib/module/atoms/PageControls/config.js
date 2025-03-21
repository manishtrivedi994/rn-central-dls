import { Sizes } from 'rn-central-dls';
export const ThemeColors = color => ({
  Light: {
    activeColor: color.icon.defaultInverse,
    inActiveColor: color.bgFill.defaultTertiary
  },
  Dark: {
    activeColor: color.icon.defaultPrimary,
    inActiveColor: color.icon.defaultTertiary
  }
});
export const VISIBLIE_NODES = 6;
export const NODE_SIZE = Sizes.Size.size8;
//# sourceMappingURL=config.js.map