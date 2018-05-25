import React from 'react';
import {StyleSheet, Text,View,TextInput} from 'react-native';

const InputCustom = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>{props.label}</Text>
      <TextInput
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.textInput}
        placeholder={props.placeholderValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    alignSelf: 'center',
  },
  textInput: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,

  }
});

export default InputCustom;
