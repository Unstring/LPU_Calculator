import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NumberButton from './NumberButton';

function Button({setAppendScreenText}): JSX.Element {
  return (
    <View>
      <NumberButton char={'9'} action={setAppendScreenText} />
      <NumberButton char={'8'} action={setAppendScreenText} />
      <NumberButton char={'7'} action={setAppendScreenText} />
      <NumberButton char={'6'} action={setAppendScreenText} />
      <NumberButton char={'5'} action={setAppendScreenText} />
      <NumberButton char={'4'} action={setAppendScreenText} />
      <NumberButton char={'3'} action={setAppendScreenText} />
      <NumberButton char={'2'} action={setAppendScreenText} />
      <NumberButton char={'1'} action={setAppendScreenText} />
      <NumberButton char={'0'} action={setAppendScreenText} />

      <NumberButton char={'+'} action={setAppendScreenText} />
      <NumberButton char={'-'} action={setAppendScreenText} />
      <NumberButton char={'*'} action={setAppendScreenText} />
      <NumberButton char={'/'} action={setAppendScreenText} />
      <NumberButton char={'='} action={setAppendScreenText} />
      <NumberButton char={'.'} action={setAppendScreenText} />
      <NumberButton char={'ac'} action={setAppendScreenText} />
      <NumberButton char={'<-'} action={setAppendScreenText} />
    </View>
  );
}

const styles = StyleSheet.create({
  //
});

export default Button;
