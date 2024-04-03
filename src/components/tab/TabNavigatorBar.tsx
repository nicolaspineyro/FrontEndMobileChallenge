import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {Button} from 'src/components/ui';
import {ROUTES} from 'src/navigation/Routes';
import {Colors} from 'src/utils/Colors';

const TabNavigationBar = (props: BottomTabBarProps) => {
  const {state} = props;
  const handleNavigation = (name: string) => props.navigation.navigate(name);

  return (
    <View style={styles.container}>
      {props.state.routes.map((route, index) => (
        <Button
          key={`tab-button-${index}`}
          onPress={() => handleNavigation(route.name)}
          style={[
            styles.tab,
            {
              backgroundColor:
                state.index === index ? Colors.purple : Colors.white,
            },
          ]}
          textStyle={{
            color: props.state.index === index ? Colors.white : Colors.purple,
          }}
          icon={
            <FontAwesomeIcon
              color={props.state.index === index ? Colors.white : Colors.purple}
              icon={ROUTES.START.screens[index].icon}
              size={24}
            />
          }
        />
      ))}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
    alignItems: 'center',
    height: 140,
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 10,
    gap: 10,
  },
});

export default TabNavigationBar;
