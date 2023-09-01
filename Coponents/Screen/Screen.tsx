import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Screen({screenText}): JSX.Element {
//     const [textsToCalculate, setTextToCalculate] = useState('demo');
// useEffect(()=>{
//     setTextToCalculate(
//         textsToCalculate + screenText
//     )
// },[]);
  return (
    <View>
      <Text>{screenText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  //
});

export default Screen;
