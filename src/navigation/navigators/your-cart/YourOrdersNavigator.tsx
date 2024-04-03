import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../Routes';
import {
  DrawerNavigationHeader,
  DrawerSceneWrapper,
} from 'src/components/drawer';

const Stack = createNativeStackNavigator();

const YourOrdersStackNavigator = () => {
  return (
    <DrawerSceneWrapper>
      <Stack.Navigator
        screenOptions={{
          header: options => <DrawerNavigationHeader {...options} />,
          animation: 'simple_push',
        }}>
        {ROUTES.YOUR_ORDERS.screens.map((route, index) => (
          <Stack.Screen
            key={`stack-your-orders-${index}`}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </DrawerSceneWrapper>
  );
};

export default YourOrdersStackNavigator;
