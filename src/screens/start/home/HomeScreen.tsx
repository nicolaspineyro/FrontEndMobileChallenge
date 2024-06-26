import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {Button} from 'src/components/ui';
import {ROUTES} from 'src/navigation/Routes';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handlePress = () => navigation.navigate(ROUTES.HOME.screens[1].name);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        gap: 20,
      }}>
      <Text style={{fontSize: 22, letterSpacing: 2.5}}>{'Home Screen'}</Text>
      <Button onPress={handlePress} title={'Go to Screen1'} />
    </View>
  );
};

export default HomeScreen;
