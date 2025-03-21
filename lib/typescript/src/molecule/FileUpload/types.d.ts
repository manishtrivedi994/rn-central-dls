import type { ReactElement } from 'react';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import type { Badge } from '../../atoms';
import type { ProgressBarProps } from '../../atoms/ProgressBar/types';
import type BaseColors from '../../theme/color/base';
import type { TextToken, TextTokenV3 } from '../../typography/text';
export type FileUploadStates = 'DEFAULT' | 'PRESSED' | 'UPLOADING' | 'UPLOAD_COMPLETE' | 'UPLOAD_FAILED' | 'ERROR' | 'DISABLED' | 'CUSTOM';
export declare enum STATE_TYPES {
    DEFAULT = "DEFAULT",
    PRESSED = "PRESSED",
    UPLOADING = "UPLOADING",
    UPLOAD_COMPLETE = "UPLOAD_COMPLETE",
    UPLOAD_FAILED = "UPLOAD_FAILED",
    ERROR = "ERROR",
    DISABLED = "DISABLED",
    CUSTOM = "CUSTOM"
}
export type CustomStyle = {
    titleColor?: string;
    subtitleColor?: string;
    subtitleFontStyle: TextToken | TextTokenV3;
    iconColor?: string;
};
export type FileUploadBaseType = {
    linkBtnText?: string;
    title?: string;
    subtitle?: string;
    isDisabled?: boolean;
    colors?: typeof BaseColors;
    customStyle?: CustomStyle;
    st?: any;
    onPress?: () => void;
};
export type FileUploadProgressType = {
    linkBtnText?: string;
    title?: string;
    subtitle?: string;
    colors?: typeof BaseColors;
    state?: FileUploadStates;
    customStyle?: CustomStyle;
    retryButtonText?: string;
    handleStopUpload?: () => void;
    handleRetryUpload?: () => void;
    handleRemoveUpload?: () => void;
    handleViewDocument?: () => void;
    onPress?: () => void;
    st?: any;
    progressBarProps?: ProgressBarProps;
    showEditButton?: boolean;
    handleEditDocument?: () => void;
    showDeleteButton?: boolean;
    customBadge?: ReactElement<typeof Badge>;
    showFilePreview?: boolean;
};
export interface BaseFileUploadComponentType extends PressableProps {
    title?: string;
    subtitle?: string;
    linkBtnText?: string;
    retryButtonText?: string;
    onPress?: () => void;
    errorMessage?: string;
    customStyle?: CustomStyle;
    state?: FileUploadStates;
    handleStopUpload?: () => void;
    handleRetryUpload?: () => void;
    handleRemoveUpload?: () => void;
    handleViewDocument?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    progressBarProps?: ProgressBarProps;
    showEditButton?: boolean;
    handleEditDocument?: () => void;
    showDeleteButton?: boolean;
    label?: string;
    isMandatory?: boolean;
    customBadge?: ReactElement<typeof Badge>;
    showFilePreview?: boolean;
}
export type FileUploadProps = BaseFileUploadComponentType;
//# sourceMappingURL=types.d.ts.map