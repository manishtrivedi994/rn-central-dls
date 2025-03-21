import type BaseColors from '../../theme/color/base';
import type { TextTokenV3 } from '../../typography/text';
export type FetchDropdownStyleProps = {
    isDisabled?: boolean;
    colors: typeof BaseColors;
    isSelected?: boolean;
};
export type DropdownVariantStyles = {
    valueVariant: TextTokenV3;
    labelVariant: TextTokenV3;
    labelFontColor: keyof typeof BaseColors.text;
    valueFontColor: keyof typeof BaseColors.text;
    borderColor: string;
};
//# sourceMappingURL=type.d.ts.map