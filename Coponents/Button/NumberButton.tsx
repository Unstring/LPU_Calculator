import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

function Numbers({char, action}): JSX.Element {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        onPress={() => {
          action(char);
        }}>
        <Text>{char}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '',
  },
});

export default Numbers;
