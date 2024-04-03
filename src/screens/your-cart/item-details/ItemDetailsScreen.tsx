import {Text, View} from 'react-native';

const ItemDetailsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
      }}>
      <Text style={{fontSize: 22, letterSpacing: 2.5}}>{'Item Details'}</Text>
    </View>
  );
};

export default ItemDetailsScreen;
