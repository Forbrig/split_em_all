import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
  TextInput,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';

//input text for login and password
export default class inputLogin extends Component {
	constructor(props) {
    super(props);
    this.state = {login: ''};
		this.state = {password: ''};
  }
	render() {
		return (
			<KeyboardAvoidingView
			behavior={'padding'}
			style = {styles.inputContainer}
			>
			  <TextInput
					underlineColorAndroid = 'transparent'
					//returnKeyType = "next"
          style = {styles.inputBox}
          placeholder = "Login"
					onChangeText={(login) => this.setState({login})}
					onSubmitEditing = {() => this.passwordInput.focus()} //focus on next label (password)
					autoCapitalize = "none"
        />
				<TextInput
					underlineColorAndroid = 'transparent'
					secureTextEntry
					style = {styles.inputBox}
          placeholder = "Password"
					autoCapitalize = "none"
					onChangeText={(password) => this.setState({password})}
					ref = {(input) =>	this.passwordInput = input}
        />
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 5,
		height: 40,
    backgroundColor: 'white',
    borderRadius: 1,
  },
	inputContainer: {
		marginTop: 400,
	}
});
