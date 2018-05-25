import React from 'react';
import {StyleSheet,Text,View,ActivityIndicator} from 'react-native';

const Spinner = (props) => {
  return (
    <View style={styles.spinny}>
      <ActivityIndicator size={props.size || 'large'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  spinny: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default Spinner;
