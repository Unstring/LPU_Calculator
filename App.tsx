import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles}>
      <View>
        <Text>this is some demo text</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //
});

export default App;
