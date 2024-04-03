import {View, ViewStyle} from 'react-native';

const Divider = ({style}: {style?: ViewStyle}) => (
  <View
    style={[
      {
        borderWidth: 0.5,
        borderColor: 'white',
        opacity: 0.5,
      },
      style,
    ]}
  />
);

export default Divider;
