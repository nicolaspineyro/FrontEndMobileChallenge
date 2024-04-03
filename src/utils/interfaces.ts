import {ReactNode} from 'react';
import {GestureResponderEvent, TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  title?: string;
  icon?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  disabled?: boolean;
  activeOpacity?: number;
  loading?: boolean;
}
