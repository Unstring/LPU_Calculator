import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Button from './Coponents/Button/Button';
// import Logic from './Coponents/Logic/Logic';
import Screen from './Coponents/Screen/Screen';

function App(): JSX.Element {
  const [appendScreenText, setAppendScreenText] = useState('');
  const [screenText, setScreenText] = useState('');
  // useEffect(()=>{

  // })

  useEffect(() => {
    setScreenText(screenText + appendScreenText);
  }, [appendScreenText]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Screen screenText={screenText} />
        <Button setAppendScreenText={setAppendScreenText} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});

export default App;
