import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-38636.cloudfunctions.net';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      code: '',
      error: ''
    }
  }

  handleSubmit = async () => {
    const { phone, code } = this.state;
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassoword`, { phone, code });
      
      firebase.auth().signInWithCustomToken(data.token);

    } catch (error) {
      console.log('error', error);
      this.setState({ error: 'Something went wrong' });
    }
  }

  render() {
    const { phone, code } = this.state;
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter code</FormLabel>
          <FormInput
            value={code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />

      </View>
    )
  }

}

export default SignInForm;