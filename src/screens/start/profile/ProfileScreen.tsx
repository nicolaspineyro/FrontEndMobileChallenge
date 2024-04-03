import {Text, View} from 'react-native';

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30,
      }}>
      <Text style={{fontSize: 22, letterSpacing: 2.5}}>{'Profile Screen'}</Text>
    </View>
  );
};

export default ProfileScreen;
