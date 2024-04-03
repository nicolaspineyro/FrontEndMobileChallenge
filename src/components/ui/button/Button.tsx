import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Colors} from 'src/utils/Colors';
import {ButtonProps} from 'src/utils/interfaces';

const Button = ({
  onPress,
  onLongPress,
  title,
  icon,
  style,
  textStyle,
  disabled,
  activeOpacity,
  loading,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[disabled ? styles.disabledButton : styles.button, style]}>
      {icon}
      {loading ? (
        <ActivityIndicator color="white" />
      ) : title ? (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#42a5f5',
    padding: 13,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default Button;
