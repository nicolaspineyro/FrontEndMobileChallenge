import {NavigationContainer} from '@react-navigation/native';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {ROUTES} from 'navigation/Routes';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={DRAWER_SCREEN_OPTIONS}>
        {ROUTES.ROOT.navigators.map((route, index) => (
          <Drawer.Screen
            key={`drawer-${index}`}
            name={route.name}
            component={route.component}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const DRAWER_SCREEN_OPTIONS: DrawerNavigationOptions = {
  drawerType: 'back',
};

export default RootDrawerNavigator;
