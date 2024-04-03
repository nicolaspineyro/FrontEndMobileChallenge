import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useCallback} from 'react';

import {DrawerContentComponentProps} from '@react-navigation/drawer';

import {Button, Divider} from 'src/components/ui';
import {Colors} from 'src/utils/Colors';

const DrawerNavigatorContent = (props: DrawerContentComponentProps) => {
  const {state, navigation} = props;

  const handlePress = useCallback(
    (route: string) =>
      navigation.reset({
        index: 0,
        routes: [{name: route}],
      }),
    [navigation],
  );
  const handleSignOut = () => {};

  const renderButtons = (props: any) => {
    const {item, index} = props;
    return (
      <Button
        onPress={() => handlePress(item.name)}
        title={item.name}
        style={[
          styles.navButton,
          {
            backgroundColor:
              index === state.index ? Colors.blurpink : Colors.transparent,
          },
        ]}
        textStyle={[
          styles.navButtonText,
          {
            color: index === state.index ? Colors.pink : Colors.white,
          },
        ]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beka</Text>
      <FlatList
        data={state.routes}
        renderItem={renderButtons}
        keyExtractor={item => `nav-button-${item.key}`}
        showsVerticalScrollIndicator={false}
      />
      <Divider />
      <Button
        key={`sign-out-button`}
        style={styles.navButton}
        title={'Sign Out'}
        textStyle={styles.navButtonText}
        onPress={handleSignOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingVertical: 120,
    paddingLeft: 20,
    gap: 40,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: '800',
    textAlign: 'center',
  },
  navButton: {
    margin: 2.5,
    borderRadius: 15,
    justifyContent: 'flex-start',
    backgroundColor: Colors.transparent,
  },
  navButtonText: {fontSize: 20},
});

export default DrawerNavigatorContent;
