import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        gap: 20,
      }}>
      <Text style={{fontSize: 22, letterSpacing: 2.5}}>{'Home Screen'}</Text>
    </View>
  );
};

export default HomeScreen;
