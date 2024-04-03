import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from 'navigation/Routes';
import {
  DrawerNavigationHeader,
  DrawerSceneWrapper,
} from 'src/components/drawer';
import TabNavigationBar from 'src/components/tab/TabNavigatorBar';

const Tab = createBottomTabNavigator();

const StartTabNavigator = () => {
  return (
    <DrawerSceneWrapper>
      <Tab.Navigator
        tabBar={props => <TabNavigationBar {...props} />}
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
