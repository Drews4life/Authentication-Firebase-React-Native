import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import firebase from 'firebase';
import Header from './Header';
import Card from './Card';
import CardSection from './CardSection';
import ButtonCustom from './ButtonCustom';
import InputCustom from './InputCustom';
import Spinner from './Spinner';


export default class LoginForm extends React.Component {
  state = { textEmail: '', textPassword: '', error: '', loading: false};



  onButtonPress() {
    const {textEmail, textPassword} = this.state;

    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(textEmail, textPassword)
    .then((this.onLoginSuccess.bind(this)))
    .catch((err) => {
      console.log(err.message);
      firebase.auth().createUserWithEmailAndPassword(textEmail, textPassword)
      .then(this.onLoginSuccess.bind(this))
      .catch((e) => {
        console.log(e.message);
        this.setState({error: 'Authentication error.', loading: false});
      })
    })
  }

  onLoginSuccess() {
    this.setState({
      textEmail: '',
      textPassword: '',
      error: '',
      loading: false
    })
  }

  renderButton() {
    if(this.state.loading){
      return (<Spinner size={'small'}/>);
    } else {
      return (
        <ButtonCustom onPress={this.onButtonPress.bind(this)}>
          Log in
        </ButtonCustom>);
    }
  }

  render() {
    return (
        <Card>
          <CardSection>
            <InputCustom
              placeholderValue={"user@mail.com"}
              label={"Email"}
              value={this.state.textEmail}
              onChangeText={textEmail => this.setState({textEmail})}
            />
          </CardSection>

          <CardSection>
          <InputCustom
            placeholderValue={"*very unique password*"}
            secureTextEntry={true}
            label={"Password"}
            value={this.state.textPassword}
            onChangeText={textPassword => this.setState({textPassword})}
          />
          </CardSection>

          <Text style={styles.errorMessage}>{this.state.error}</Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>

        </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorMessage: {
    alignSelf: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20
  },
});
