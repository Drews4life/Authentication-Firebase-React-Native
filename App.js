import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/Header';
import Card from './src/components/Card';
import CardSection from './src/components/CardSection';
import ButtonCustom from './src/components/ButtonCustom';
import LoginForm from './src/components/LoginForm';
import Spinner from './src/components/Spinner';


export default class App extends React.Component {

  state = { loggedIn: null };

  componentWillMount () {
    firebase.initializeApp({
      apiKey: "AIzaSyBiIM_wPKdac74qLMKx05obJ9j9TIw4ghU",
      authDomain: "auth-80b8e.firebaseapp.com",
      databaseURL: "https://auth-80b8e.firebaseio.com",
      projectId: "auth-80b8e",
      storageBucket: "auth-80b8e.appspot.com",
      messagingSenderId: "860073495950"
  });

    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.setState({loggedIn : true});
        } else {
          this.setState({loggedIn : false});
        }
    });
}

  renderContent(){

    switch (this.state.loggedIn) {
      case true:
        return <ButtonCustom onPress={() => {firebase.auth().signOut()}}> Log out </ButtonCustom>;

      case false:
        return  <LoginForm/>;

      default:
        return <View style={{paddingTop: 25}}><Spinner size="large"/></View>;

    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Authentication"}/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 110
  },
});
