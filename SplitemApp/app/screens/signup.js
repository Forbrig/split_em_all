import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  CommonButton,
  CommonInput,
} from '../configs/routes.js';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  handleButtonSigninPress = () => {
      this.props.navigation.navigate('Login');

  }

  handleButtonReturnLoginPress = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.backgroundSignup}>
        <Text style = {{fontSize: 40, fontWeight: 'bold', alignItems: 'center', color: 'white', marginTop: 20}}>Register</Text>
        <View style = {styles.inputContainer}>
          <Text style = {styles.formTitle}>Full Name:</Text>
          <CommonInput
            style = {styles.inputStyle}
            placeholder = "User Name"
            onChangeText = {(username) => this.setState({username})}
          />
          <Text style = {styles.formTitle}>Email Adress:</Text>
          <CommonInput
            style = {styles.inputStyle}
            placeholder = "user@email.com"
            onChangeText = {(email) => this.setState({email})}
          />
          <Text style = {styles.formTitle}>Password:</Text>
          <CommonInput
            style = {styles.inputStyle}
            placeholder = "***********"
            secureTextEntry = {true}
            onChangeText = {(password) => this.setState({password})}
          />
          <Text style = {styles.formTitle}>Confirm your Password:</Text>
          <CommonInput
            style = {styles.inputStyle}
            placeholder = "***********"
            secureTextEntry = {true}
            onChangeText = {(confirmPassword) => this.setState({confirmPassword})}
          />
        </View>

        {/*
        <Text>
          {this.state.username + "\n"}
          {this.state.password}
        </Text>
        */}

        <View style = {styles.buttonSignup}>
          <CommonButton
            title = "Create Account"
            color = "#a51d0d"
            onPress = {this.handleButtonSigninPress}
          />
        </View>
        <View style = {styles.returnToLoginContainer}>
          <Text style = {styles.returnToLoginText}> Already registered?</Text>
          <CommonButton
            style = {styles.returnToLoginText}
            color = '#1b1f26'
            title = "Return to Login"
            onPress = {this.handleButtonReturnLoginPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundSignup: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1b1f26',
  },
  inputContainer: {
		width: 300,
		marginTop: 50,
	},
  formTitle: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  inputStyle: {
		marginTop: 5,
		height: 40,
		fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonSignup: {
		width: 300,
    marginTop: 40,
    borderRadius: 4,
    borderWidth: 0.8,
  },
  returnToLoginContainer: {
    height: 20,
    backgroundColor: 'transparent',
    marginTop: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  returnToLoginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
