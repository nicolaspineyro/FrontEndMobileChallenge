import {Text, View} from 'react-native';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Button} from 'src/components/ui';

const YourCartScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handlePress = () => navigation.navigate('Item Details');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        gap: 20,
      }}>
      <Text style={{fontSize: 22, letterSpacing: 2.5}}>
        {'Your Cart Screen'}
      </Text>
      <Button onPress={handlePress} title={'Go to Item Details'} />
    </View>
  );
};

export default YourCartScreen;
