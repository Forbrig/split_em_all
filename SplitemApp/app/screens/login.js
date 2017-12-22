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
  //hide navigation bar when in login screen
  static navigationOptions = {
    tabBarVisible: false
  };

  constructor(props) {
    super(props);
    this.state = {username: ''};
		this.state = {password: ''};
  }

  handleButtonLoginPress = () => {
    Alert.alert('It work!')
  }

  render() {
    return (
      <View style = {styles.backgroundLogin}>
        <LogoLogin />
        <View style = {styles.inputContainer}>
          <CommonInput
            placeholder = "Login"
            onChangeText = {(username) => this.setState({username})}
          />
          <CommonInput
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
            color = "#a51d0d"
            onPress = {this.handleButtonLoginPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundLogin: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1b1f26',
  },
  //this margin is between marginBottom of logoLogin container and first inputBox
	inputContainer: {
		width: 300,
		marginTop: 50,
	},
  buttonLogin: {
		width: 300,
    marginTop: 20,
    height: 40,
    borderRadius: 4,
    borderWidth: 0.8,
  },
});
