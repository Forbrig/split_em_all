import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.backgroundHome}>
        <Text>
          "Home"
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundHome: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
  },
});
