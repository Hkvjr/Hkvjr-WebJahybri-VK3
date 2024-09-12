import React from 'react';
import { Appbar } from 'react-native-paper';

function CustomAppBar({ navigation, back }) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('SecondScreen')} />
      )}
      <Appbar.Content title="MD Nav Bar" />
    </Appbar.Header>
  );
}

export default CustomAppBar;

