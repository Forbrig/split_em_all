import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
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
        <View style = {styles.buttonLoginContainer}>
          <Button
            title = "Login"
            onPress={this._onPressButton}
            //color = 'grey'
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
    backgroundColor: 'green',
  },
  buttonLoginContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
