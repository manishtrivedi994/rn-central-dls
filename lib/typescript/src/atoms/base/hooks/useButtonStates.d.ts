import { type LinkButtonProps } from '../../../types/button';
type Props = {
    type: string;
    isLoading?: boolean;
    VARIANT_STYLE_MAP: (data: any) => any;
    DISABLED_STYLE: (data: any, type?: string) => any;
    TEXT_VARIANT_MAP: any;
};
declare const useButtonStates: ({ VARIANT_STYLE_MAP, DISABLED_STYLE, TEXT_VARIANT_MAP, disabled, isLoading, type, size, }: LinkButtonProps & Props) => {
    onPressInHandler: () => void;
    onPressOutHandler: () => void;
    customStyles: any;
    textVariant: any;
    sizes: {
        IconSize: {
            iconSize12: number;
            iconSize14: number;
            iconSize16: number;
            iconSize20: number;
            iconSize24: number;
            iconSize32: number;
            iconSize40: number;
            iconSize48: number;
        };
        CornerRadius: {
            cornerRadius0: number;
            cornerRadius4: number;
            cornerRadius8: number;
            cornerRadius12: number;
            cornerRadius16: number;
            cornerRadiusFull: number;
        };
        Size: {
            size4: number;
            size8: number;
            size10: number;
            size16: number;
            size20: number;
            size22: number;
            size24: number;
            size28: number;
            size32: number;
            size34: number;
            size36: number;
            size38: number;
            size40: number;
            size44: number;
            size48: number;
            size58: number;
            size160: number;
        };
        Space: {
            space0: number;
            space2: number;
            space4: number;
            space6: number;
            space8: number;
            space10: number;
            space12: number;
            space16: number;
            space20: number;
            space24: number;
            space32: number;
        };
    };
    showBorder: boolean;
};
export default useButtonStates;
//# sourceMappingURL=useButtonStates.d.ts.map