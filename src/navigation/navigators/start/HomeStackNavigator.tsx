import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../Routes';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      {ROUTES.HOME.screens.map((route, index) => (
        <Stack.Screen
          key={`stack-home-${index}`}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
