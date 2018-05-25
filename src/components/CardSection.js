import React from 'react';
import {View, Text} from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.container}>{props.children}</View>
  );
};

const styles = {
  container: {
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export default CardSection;
