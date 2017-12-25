import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.backgroundHome}>
        <Text>
          "Profile"
        </Text>
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
});
