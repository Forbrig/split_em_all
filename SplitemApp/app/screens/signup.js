import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  CommonButton,
  CommonInput,
  HeaderTitle,
} from '../configs/routes.js';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
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
      <View style = {styles.headerBar}>
        <HeaderTitle headerText = 'Register'/>
        <View style = {styles.backgroundSignup}>
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
            {this.state.email + "\n"}
            {this.state.password + "\n"}
            {this.state.confirmPassword}
          </Text>
          */}

          <CommonButton
            containerStyle = {styles.buttonSigninContainer}
            textStyle = {styles.buttonSigninText}
            title = "Create Account"
            onPress = {this.handleButtonSigninPress}
          />

          <View style = {styles.returnLoginContainer}>
            <Text style = {styles.returnLoginText}>Already registered? </Text>
            <CommonButton
              textStyle = {styles.returnLoginText}
              title = "Return to Login"
              onPress = {this.handleButtonReturnLoginPress}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBar: {
    flexGrow: 1,
  },
  backgroundSignup: {
    flex: 1,
    backgroundColor: '#16191e',
    alignItems: 'center',
  },
  inputContainer: {
		width: 300,
		marginTop: 20,
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
  buttonSigninContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ce1400",
    width: 300,
    height: 40,
    marginTop: 20,
    borderRadius: 4,
    borderWidth: 0.8,
  },
  buttonSigninText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  returnLoginContainer: {
    height: 20,
    backgroundColor: 'transparent',
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  returnLoginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
