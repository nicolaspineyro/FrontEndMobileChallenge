import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from 'navigation/Routes';

const Tab = createBottomTabNavigator();

const StartTabNavigator = () => {
  return (
    <Tab.Navigator>
      {ROUTES.START.screens.map((route, index) => (
        <Tab.Screen
          key={`tab-start-${index}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default StartTabNavigator;
