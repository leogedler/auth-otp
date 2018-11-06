import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-38636.cloudfunctions.net';

class SignUpForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      error: ''
    }
  }

  handleSubmit = async () => {
    const { phone } = this.state;
    try {
      await axios.post(`${ROOT_URL}/createUser`, {phone});
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {phone})
    } catch (error) {
      console.log('error', error);
      this.setState({ error: 'Something went wrong' });
    }
  }

  render() {
    const { phone } = this.state;
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button onPress={this.handleSubmit} title="Submit" />

      </View>
    )
  }

}

export default SignUpForm;
