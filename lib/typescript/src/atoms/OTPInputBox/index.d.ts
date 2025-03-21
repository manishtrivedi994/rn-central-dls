import React from 'react';
type Props = {
    hint?: string;
    maxOTPSize?: 4 | 6;
    showError?: boolean;
    onOTPEnteredCompleted?: (otp: string) => void;
    onChangedText?: (value: string, isCompleted?: boolean) => void;
};
export type OTPInputBoxRef = {
    setOtpValue: (otp: string) => void;
    focus: () => void;
    blur: () => void;
};
declare const OTPInputBox: React.MemoExoticComponent<React.ForwardRefExoticComponent<Props & React.RefAttributes<OTPInputBoxRef>>>;
export { OTPInputBox };
//# sourceMappingURL=index.d.ts.map