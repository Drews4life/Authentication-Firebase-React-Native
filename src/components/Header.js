import React, {Component} from 'react';
import {Text, View} from 'react-native';

const Header = (props) =>   {

    return(
      <View style={styles.textViewContainer}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
      </View>
    );

}

const styles = {
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  textViewContainer: {
    marginTop: 20,
    height: 50,
    backgroundColor: '#C5EFF7',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#95A5A6',
    elevation: 2,
    position: 'relative',
  }
};

export default Header;
