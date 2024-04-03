import {useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';

const ProfileScreen = () => {
  const route = useRoute();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
      }}>
      <Text style={{fontSize: 22, letterSpacing: 2.5}}>{`${route.name}`}</Text>
    </View>
  );
};

export default ProfileScreen;
