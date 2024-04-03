import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from 'navigation/Routes';
import DrawerSceneWrapper from 'src/components/drawer/DrawerSceneWrapper';

const Tab = createBottomTabNavigator();

const StartTabNavigator = () => {
  return (
    <DrawerSceneWrapper>
      <Tab.Navigator>
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
