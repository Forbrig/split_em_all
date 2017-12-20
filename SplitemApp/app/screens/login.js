import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  ButtonLogin,
  InputLogin,
  LogoLogin,
} from '../configs/routes.js';


export default class Login extends Component {
  //hide navigation bar when in login screen
  static navigationOptions = {
    tabBarVisible: false
  };
  render() {
    return (
      <View style = {styles.backgroundLogin}>
        <LogoLogin />
        <InputLogin />
        <ButtonLogin />
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
});
