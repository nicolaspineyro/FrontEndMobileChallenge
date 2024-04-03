import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from 'navigation/Routes';
import DrawerNavigationHeader from 'src/components/drawer/DrawerNavigationHeader';
import DrawerSceneWrapper from 'src/components/drawer/DrawerSceneWrapper';

const Tab = createBottomTabNavigator();

const StartTabNavigator = () => {
  return (
    <DrawerSceneWrapper>
      <Tab.Navigator
        screenOptions={{
          header: options => <DrawerNavigationHeader {...options} />,
        }}>
        {ROUTES.START.screens.map((route, index) => (
          <Tab.Screen
            key={`tab-start-${index}`}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Tab.Navigator>
    </DrawerSceneWrapper>
  );
};

export default StartTabNavigator;
