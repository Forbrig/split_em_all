//note that default button has few layout animation options, for more options search for touchableOpacity

import React, { Component } from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const CommonButton = (props) => {
  const { textStyle, containerStyle, title, onPress } = props;
  return (
		<TouchableOpacity
			style = {containerStyle}
			onPress = {onPress}
		>
			<Text style = {textStyle}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

CommonButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

CommonButton.defaultProps = {
	title: 'Button Title',
	onPress: null,
};

export default CommonButton;
