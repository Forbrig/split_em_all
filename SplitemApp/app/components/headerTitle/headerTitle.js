import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

const HeaderTitle = (props) => {
  const { headerText } = props;
  return (
		<View style = {styles.headerBar}>
			<Text style = {styles.headerText}>
				{headerText}
			</Text>
		</View>

  );
};

HeaderTitle.propTypes = {
  headerText: PropTypes.string,
};

HeaderTitle.defaultProps = {
	headerText: 'Header Title',
}

const styles = StyleSheet.create({
	headerBar: {
		height: 80,
    backgroundColor: '#ce1400',
    alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 10,
		borderBottomColor: '#840c00',
  },
	headerText: {
		fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'white',
		padding: 10,
	},
});

export default HeaderTitle;
