import {NavigationContainer} from '@react-navigation/native';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {ROUTES} from 'navigation/Routes';
import {Colors} from 'src/navigation/utils/Colors';

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
