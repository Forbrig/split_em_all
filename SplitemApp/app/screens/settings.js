import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Settings extends Component {
  render() {
    return (
      <View style = {styles.backgroundHome}>
        <Text style = {styles.screenTitle}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundHome: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1b1f26',
  },
  screenTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'white',
    marginTop: 20
  },
});
