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

        <CommonButton
          containerStyle = {styles.buttonLoginContainer}
          textStyle = {styles.buttonLoginText}
          title = "Login"
          onPress = {this.handleButtonLoginPress}
        />

        {/*
          containerStyle will inherit style.signupContainer
        */}

        <View style = {styles.signupContainer}>
          <Text style = {styles.signupText}>Don't have an account? </Text>
          <CommonButton
            textStyle = {styles.signupText}
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
  buttonLoginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ce1400",
    width: 300,
    height: 40,
    marginTop: 20,
    borderRadius: 4,
    borderWidth: 0.8,
  },
  buttonLoginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    height: 20,
    backgroundColor: 'transparent',
    marginTop: 5,
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
