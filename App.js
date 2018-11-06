import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';

export default class App extends React.Component {

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAoTtqlP5BNUivcR5F0ugsM871A2hT0jOY",
      authDomain: "one-time-password-38636.firebaseapp.com",
      databaseURL: "https://one-time-password-38636.firebaseio.com",
      projectId: "one-time-password-38636",
      storageBucket: "one-time-password-38636.appspot.com",
      messagingSenderId: "356483428108"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
