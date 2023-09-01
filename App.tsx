import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Button from './Coponents/Button/Button';
import Logic from './Coponents/Logic/Logic';
import Screen from './Coponents/Screen/Screen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles}>
      <View>
        <Text>this is some demo text</Text>
      </View>
      <Screen />
      <Button />
      <Logic />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //
});

export default App;
