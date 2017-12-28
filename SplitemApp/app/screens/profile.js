import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.backgroundProfile}>
        <Text style = {styles.screenTitle}>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundProfile: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1b1f26',
  },
  screenTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'white',
    marginTop: 20,
  },
});
