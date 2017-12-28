import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  AsyncStorage,
} from 'react-native';

import {
  CommonButton,
  CommonInput,
  LogoLogin,
} from '../configs/routes.js';

export default class Login extends Component {
  /*
  Don`t need it anymore, tabNavigator is nested inside StackNavigator that contains this screen
  //hide navigation bar when in login screen
  static navigationOptions = {
    tabBarVisible: false
  };
  */

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleButtonLoginPress = () => {
    //Alert.alert('It work!')
    this.props.navigation.navigate('LoggedInBundle');
  }

  handleButtonSignupPress = () => {
    //Alert.alert('It work!')
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <View style = {styles.backgroundLogin}>
        <LogoLogin />
        <Text style = {styles.textLogo}>
					SPLIT'EM ALL
				</Text>
        <View style = {styles.inputContainer}>
          <CommonInput
            style = {styles.inputStyle}
            placeholder = "Login"
            onChangeText = {(username) => this.setState({username})}
          />
          <CommonInput
            style = {styles.inputStyle}
            placeholder = "Password"
            secureTextEntry = {true}
            onChangeText = {(password) => this.setState({password})}
          />
        </View>

        {/*
        <Text>
          {this.state.username + "\n"}
          {this.state.password}
        </Text>
        */}

        <View style = {styles.buttonLogin}>
          <CommonButton
            title = "Login"
            color = "#840c00"
            onPress = {this.handleButtonLoginPress}
          />
        </View>
        <View style = {styles.signupContainer}>
          <Text style = {styles.signupText}> Don't have an account?</Text>
          <CommonButton
            style = {styles.signupText}
            color = "#16191e"
            title = "Sign up"
            onPress = {this.handleButtonSignupPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundLogin: {
    backgroundColor: '#16191e',
    flex: 1,
    alignItems: 'center',
  },
  textLogo: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 10,
    fontSize: 30,
	},
  //this margin is between marginBottom of logoLogin container and first inputBox
	inputContainer: {
		width: 300,
		marginTop: 30,
	},
  buttonLogin: {
		width: 300,
    marginTop: 20,
    height: 40,
    borderRadius: 4,
    borderWidth: 0.8,
  },
  signupContainer: {
    height: 20,
    backgroundColor: 'transparent',
    marginTop: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  signupText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputStyle: {
		marginTop: 5,
		height: 40,
		fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
