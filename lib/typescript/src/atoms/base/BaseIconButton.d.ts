import { type StyleProp, type ViewStyle, type PressableProps } from 'react-native';
import React from 'react';
interface Props extends PressableProps {
    icon?: React.ReactElement;
    containerStyle?: StyleProp<ViewStyle>;
    isLoading?: boolean;
    disabled?: boolean;
    inverse?: boolean;
    onPress?: () => void;
    throttle?: number;
}
declare const BaseIconButton: React.MemoExoticComponent<(props: Props) => React.JSX.Element>;
export { BaseIconButton };
//# sourceMappingURL=BaseIconButton.d.ts.map