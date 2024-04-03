import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../../Routes';
import {
  DrawerNavigationHeader,
  DrawerSceneWrapper,
} from 'src/components/drawer';

const Stack = createNativeStackNavigator();

const YourCartStackNavigator = () => {
  return (
    <DrawerSceneWrapper>
      <Stack.Navigator
        screenOptions={{
          header: options => <DrawerNavigationHeader {...options} />,
          animation: 'simple_push',
        }}>
        {ROUTES.YOUR_CART.screens.map((route, index) => (
          <Stack.Screen
            key={`stack-your-cart-${index}`}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </DrawerSceneWrapper>
  );
};

export default YourCartStackNavigator;
