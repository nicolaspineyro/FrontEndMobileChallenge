import {FlatList, StyleSheet, Text, View} from 'react-native';
import {memo, useCallback} from 'react';

import {DrawerContentComponentProps} from '@react-navigation/drawer';

import {Button, Divider} from 'src/components/ui';
import {Colors} from 'src/utils/Colors';

const DrawerNavigatorContent = (props: DrawerContentComponentProps) => {
  const {state, navigation} = props;

  const handlePress = (route: string) =>
    navigation.reset({
      index: 0,
      routes: [{name: route}],
    });

  const handleSignOut = () => {};

  const renderButtons = useCallback(
    (props: any) => {
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
    },
    [state.index],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={navigation.closeDrawer}>
        Beka
      </Text>
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
    paddingLeft: 20,
    paddingTop: 100,
    paddingBottom: 150,
    gap: 40,
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: '800',
    textAlign: 'center',
  },
  navButton: {
    paddingRight: 20,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'flex-start',
    backgroundColor: Colors.transparent,
  },
  navButtonText: {fontSize: 22, marginLeft: 5},
});

export default memo(DrawerNavigatorContent);
