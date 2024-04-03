import {Text, View} from 'react-native';

const YourOrdersScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
      }}>
      <Text style={{fontSize: 22, letterSpacing: 2.5}}>
        {'Your Orders Screen'}
      </Text>
    </View>
  );
};

export default YourOrdersScreen;
