import React, { Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

//import logoImage from '../images/logo.png';

export default class LogoLogin extends Component {
	render() {
		return (
			<View style={styles.container}>
				//<Image source={logoImage} style={styles.image} />
				<Text style={styles.text}>Split em All</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 80,
		height: 80,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
	}
});