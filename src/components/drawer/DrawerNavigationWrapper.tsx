import {StyleSheet} from 'react-native';
import React, {ReactNode, useEffect} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const DrawerNavigationWrapper = ({
  children,
  animatedPadding,
}: {
  children: ReactNode;
  animatedPadding: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      paddingTop: animatedPadding.value,
    };
  });

  useEffect(() => {
    animatedPadding.value = withTiming(0, {duration: 0});
  }, [animatedPadding]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default DrawerNavigationWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
