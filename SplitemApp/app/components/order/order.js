//note that default button has few layout animation options, for more options search for touchableOpacity

import React, { Component} from 'react';
import {
	Button,
	Alert,
} from 'react-native';
import PropTypes from 'prop-types';

const CommonButton = (props) => {
  const { title, color, onPress } = props;
  return (
		<Button
			title = {title}
			color = {color}
			onPress = {onPress}
		/>
  );
};

CommonButton.propTypes = {
  title: PropTypes.string,
	color: PropTypes.string,
  onPress: PropTypes.func,
};

CommonButton.defaultProps = {
	title: 'Button Title',
	onPress: null,
	color: 'green',
}
export default CommonButton;
