import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from 'src/navigation/Routes';
import DrawerNavigationHeader from 'src/components/drawer/DrawerNavigationHeader';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: options => <DrawerNavigationHeader {...options} />,
      }}>
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
