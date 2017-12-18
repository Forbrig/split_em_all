import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from 'react-native';

export default class Login extends Component<{}> {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style = {styles.backgroundLogin}>
        <View style = {styles.loginContainer}>
          <TextInput
            style = {styles.inputBox}
            placeholder = "Login"
            //onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style = {styles.inputBox}
            placeholder = "Password"
            //onChangeText={(text) => this.setState({text})}
          />
          <View style = {styles.buttonLogin}>
            <Button
              underlineColorAndroid='transparent'
              title = "Login"
              color = 'darkgreen'
              onPress = {this._onPressButton}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundLogin: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
  },
  loginContainer: {
    marginTop: 300,
    width: 300,
    justifyContent: 'space-between',
  },
  inputBox: {
    backgroundColor: 'white',
    borderRadius: 1,

  },
  buttonLogin: {
    marginTop: 20,
    height: 40,
    width: 300,
    borderRadius: 4,
    borderWidth: 0.8,
    //borderColor: '#d6d7da',
  },
});
