import type { SizeVariants, TextState } from '../types';
type Props = {
    disabled: boolean;
    checked: boolean;
    size: SizeVariants;
    textState: TextState;
};
declare const useRadioButtonStates: ({ disabled, checked, size, textState, }: Props) => {
    onPressIn: () => void;
    onPressOut: () => void;
    customStyles: {
        outerContainerStyle: {
            borderWidth: number;
            borderColor: string;
            backgroundColor: string;
        };
        innerContainerStyle: {};
    };
    textVariant: import("../../..").TextTokenV3;
};
export default useRadioButtonStates;
//# sourceMappingURL=useRadioButtonStates.d.ts.map