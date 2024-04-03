import {faArrowLeft, faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {DrawerHeaderProps, useDrawerProgress} from '@react-navigation/drawer';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const DrawerNavigationHeader = (
  props: DrawerHeaderProps | NativeStackHeaderProps | BottomTabHeaderProps,
) => {
  const state = props.navigation.getState();
  const isStack = state.type === 'stack' && state.index > 0;

  const handleDrawer = () => {
    if ('openDrawer' in props.navigation) props.navigation.openDrawer();
  };

  const handleStack = () => {
    props.navigation.goBack();
  };

  const progress = useDrawerProgress();

  const headerContainerStyle = useAnimatedStyle(() => {
    return {
      paddingTop: interpolate(
        progress.value,
        [0, 1],
        [Platform.OS === 'ios' ? 60 : 30, 25],
      ),
    };
  });

  return (
    <Animated.View style={[styles.NavigationContainer, headerContainerStyle]}>
      {isStack ? (
        <TouchableOpacity onPress={handleStack}>
          <FontAwesomeIcon size={28} icon={faArrowLeft} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleDrawer}>
          <FontAwesomeIcon size={28} icon={faBars} />
        </TouchableOpacity>
      )}

      <Text style={{fontSize: 22, letterSpacing: 3.5}}>
        {props.route.name.toLocaleUpperCase()}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  NavigationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    paddingVertical: 20,
    paddingHorizontal: 30,
    zIndex: 20,
    backgroundColor: 'white',
  },
});

export default DrawerNavigationHeader;
