import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {useSharedValue, withTiming} from 'react-native-reanimated';

import {
  DrawerNavigationWrapper,
  DrawerNavigatorContent,
} from 'src/components/drawer';

import {ROUTES} from 'navigation/Routes';
import {Colors} from 'src/utils/Colors';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  const animatedPadding = useSharedValue(0);
  const triggerAnimation = (e: {data: {state: {history: any[]}}}) => {
    const drawerOpen = e?.data.state.history?.some(
      item => item?.status === 'open',
    );
    animatedPadding.value = withTiming(
      drawerOpen ? (Platform.OS === 'ios' ? 55 : 20) : 0,
      {
        duration: 200,
      },
    );
  };

  return (
    <DrawerNavigationWrapper animatedPadding={animatedPadding}>
      <NavigationContainer>
        <Drawer.Navigator
          screenListeners={{
            state: triggerAnimation,
          }}
          drawerContent={DrawerNavigatorContent}
          screenOptions={DRAWER_SCREEN_OPTIONS}>
          {ROUTES.ROOT.navigators.map((route, index) => (
            <Drawer.Screen
              key={`drawer-${index}`}
              name={route.name}
              component={route.component}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </DrawerNavigationWrapper>
  );
};

const DRAWER_SCREEN_OPTIONS: DrawerNavigationOptions = {
  drawerType: 'back',
  headerShown: false,
  overlayColor: 'transparent',
  drawerStatusBarAnimation: 'none',
  drawerStyle: {
    backgroundColor: Colors.purple,
    width: '50%',
    borderTopLeftRadius: 40,
  },
  sceneContainerStyle: {
    backgroundColor: Colors.purple,
  },
};
export default RootDrawerNavigator;
