import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from 'src/navigation/Routes';
import {
  DrawerNavigationHeader,
  DrawerSceneWrapper,
} from 'src/components/drawer';

const Stack = createNativeStackNavigator();

const FavoritesStackNavigator = () => {
  return (
    <DrawerSceneWrapper>
      <Stack.Navigator
        screenOptions={{
          header: options => <DrawerNavigationHeader {...options} />,
          animation: 'simple_push',
        }}>
        {ROUTES.FAVORITES.screens.map((route, index) => (
          <Stack.Screen
            key={`stack-favorites-cart-${index}`}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </DrawerSceneWrapper>
  );
};

export default FavoritesStackNavigator;
