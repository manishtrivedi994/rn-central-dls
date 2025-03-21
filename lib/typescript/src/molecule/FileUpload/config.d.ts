import type BaseColors from '../../theme/color/base';
import { TextToken } from '../../typography/text';
export declare const STATE_TYPE: (themeColor: typeof BaseColors) => {
    DEFAULT: {
        borderStyle: string;
        borderColor: string;
        backgroundColor: string;
        titleColor: string;
        subtitleColor: string;
        iconColor: string;
    };
    PRESSED: {
        borderStyle: string;
        borderColor: string;
        backgroundColor: string;
        iconColor: string;
    };
    DISABLED: {
        borderStyle: string;
        borderColor: string;
        backgroundColor: string;
        titleColor: string;
        subtitleColor: string;
        iconColor: string;
    };
    UPLOADING: {
        borderStyle: string;
        borderColor: string;
        subtitleColor: string;
        subtitleFontStyle: TextToken;
    };
    UPLOAD_FAILED: {
        subtitleColor: string;
        subtitleFontStyle: TextToken;
        borderStyle: string;
        borderColor: string;
    };
    UPLOAD_COMPLETE: {
        subtitleColor: string;
        subtitleFontStyle: TextToken;
        borderStyle: string;
        borderColor: string;
    };
    CUSTOM: {
        borderStyle: string;
        borderColor: string;
        backgroundColor: string;
        titleColor: string;
        subtitleColor: string;
        iconColor: string;
    };
};
//# sourceMappingURL=config.d.ts.map