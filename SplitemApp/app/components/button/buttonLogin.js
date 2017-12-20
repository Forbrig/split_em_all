//note that default button has few layout options, for more options search for touchableOpacity

import React, { Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	Alert,
} from 'react-native';

export default class buttonLogin extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
		return (
			<View style={styles.buttonLogin}>
        <Button
          title = "Login"
          color = '#a51d0d'
          onPress = {this._onPressButton}
        />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  buttonLogin: {
		width: 300,
    marginTop: 20,
    height: 40,
    borderRadius: 4,
    borderWidth: 0.8,
  },
});
