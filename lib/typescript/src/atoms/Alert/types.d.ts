/// <reference types="react" />
import type { SvgProps } from 'react-native-svg';
import type { StyleProp, ViewStyle } from 'react-native';
import type BaseColors from '../../theme/color/base';
export type AlertPriority = 'HIGH' | 'LOW';
export type AlertType = 'ERROR' | 'WARNING' | 'SUCCESS' | 'INFO';
export interface GetAlertStyleParams {
    type: AlertType;
    priority: AlertPriority;
    colors: typeof BaseColors;
}
interface BaseProps {
    title: string;
    desc?: string;
    leftIcon?: React.ReactElement<SvgProps>;
    rightIcon?: React.ReactElement<SvgProps>;
    showCross?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    onPress?: () => void;
}
export interface BaseAlertProps extends BaseProps {
    textColor?: string;
    iconColor?: string;
    showCross?: boolean;
}
export interface AlertComponentProps extends BaseProps {
    type?: AlertType;
    priority?: AlertPriority;
}
export {};
//# sourceMappingURL=types.d.ts.map