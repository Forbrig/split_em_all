import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.backgroundLogin}>
        <Text>
          "Login"
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundLogin: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
  },
});
