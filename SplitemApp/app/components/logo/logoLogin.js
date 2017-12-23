import React, { Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImage from '../../images/logo.png';

export default class LogoLogin extends Component {
	render() {
		return (
			<View style = {styles.container}>
				<Image source= {logoImage} style = {styles.image} />
				<Text style = {styles.text}>
					Split em All
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		alignItems: 'center',
	},
	image: {
		width: 300,
		height: 300,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 10,
	}
});
