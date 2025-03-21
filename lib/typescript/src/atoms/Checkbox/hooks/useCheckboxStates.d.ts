import type { SizeVariants, TextState } from '../types';
type Props = {
    disabled: boolean;
    checked: boolean;
    indeterminate: boolean;
    size: SizeVariants;
    textState: TextState;
};
declare const useCheckboxStates: ({ disabled, checked, indeterminate, size, textState, }: Props) => {
    onPressIn: () => void;
    onPressOut: () => void;
    customStyles: {
        outerContainerStyle: {
            borderWidth: number;
            borderColor: string;
            backgroundColor: string;
        };
        iconStyle: {
            color: string;
        };
    };
    textVariant: import("../../..").TextTokenV3;
};
export default useCheckboxStates;
//# sourceMappingURL=useCheckboxStates.d.ts.map