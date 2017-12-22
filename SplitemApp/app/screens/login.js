import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  AsyncStorage,
} from 'react-native';

import {
  CommonButton,
  InputLogin,
  LogoLogin,
} from '../configs/routes.js';


export default class Login extends Component {
  //hide navigation bar when in login screen
  static navigationOptions = {
    tabBarVisible: false
  };

  handleButtonLoginPress = () => {
    Alert.alert('It work!')
  }

  render() {
    return (
      <View style = {styles.backgroundLogin}>
        <LogoLogin />
        <InputLogin />
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
  buttonLogin: {
		width: 300,
    marginTop: 20,
    height: 40,
    borderRadius: 4,
    borderWidth: 0.8,
  },
});
