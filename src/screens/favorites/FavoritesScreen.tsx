import {Text, View} from 'react-native';

const FavoritesScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
      }}>
      <Text style={{fontSize: 22, letterSpacing: 2.5}}>
        {'Favorites Screen'}
      </Text>
    </View>
  );
};

export default FavoritesScreen;
