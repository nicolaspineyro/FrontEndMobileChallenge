import {StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';

const DrawerSceneWrapper = ({children}: {children: ReactNode}) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(progress.value, [0, 1], [0, 15], 'clamp'),
        },
        {
          translateX: interpolate(progress.value, [0, 1], [0, 75], 'clamp'),
        },
        {
          rotateZ: `${interpolate(
            progress.value,
            [0, 1],
            [0, -10],
            'clamp',
          )}deg`,
        },
      ],
      borderTopLeftRadius: interpolate(progress.value, [0, 1], [0, 40]),
      overflow: 'hidden',
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

export default DrawerSceneWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
