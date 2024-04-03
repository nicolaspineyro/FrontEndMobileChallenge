import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {Button} from 'src/components/ui';

const ExampleScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const goTo = route.name === 'Screen1' ? 'Screen2' : 'Screen1';
  const handlePress = () => navigation.navigate(goTo);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        gap: 20,
        paddingHorizontal: 30,
      }}>
      <Text style={{fontSize: 22, letterSpacing: 2.5}}>{`${route.name}`}</Text>
      <Button onPress={handlePress} title={`Go to ${goTo}`} />
    </View>
  );
};

export default ExampleScreen;
