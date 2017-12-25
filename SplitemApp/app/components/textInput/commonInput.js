import React, { Component } from 'react';
import {
	StyleSheet,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
//to use stylesheet from other components

//<KeyboardAvoidingView/> dont work properly with tabNavigator, a RN problem not fixed till today (20/12/2017)

const CommonInput = (props) => {
  const { style, underlineColorAndroid, placeholder, autoCapitalize, autoCorrect, secureTextEntry, onChangeText } = props;
  return (
		<TextInput
			style = {style}
			underlineColorAndroid = {underlineColorAndroid}
			secureTextEntry = {secureTextEntry}
			placeholder = {placeholder}
			autoCapitalize = {autoCapitalize}
			autoCorrect = {autoCorrect}
			onChangeText = {onChangeText}
		/>
  );
};

CommonInput.propTypes = {
	underlineColorAndroid: PropTypes.string,
	placeholder: PropTypes.string,
	autoCapitalize: PropTypes.string,
	autoCorrect: PropTypes.bool,
	secureTextEntry: PropTypes.bool,
	onChangeText: PropTypes.func.isRequired,
};

CommonInput.defaultProps = {
	underlineColorAndroid: 'transparent',
	placeholder: "defaultPlaceholder",
	autoCapitalize: "none",
	secureTextEntry: false,
	autoCorrect: false,
}

// could not find how to use style as proptype (maybe PropTypes.object in some strange way)
const styles = StyleSheet.create({
  defaultStyle: {
		marginTop: 5,
		height: 40,
		fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default CommonInput;
