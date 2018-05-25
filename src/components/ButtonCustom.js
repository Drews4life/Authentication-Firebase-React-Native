import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

const ButtonCustom = (props) => {
  return (
    <TouchableOpacity
    onPress={props.onPress}
    style={styles.container}>
      <Text style={styles.txt}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  txt: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export default ButtonCustom;
