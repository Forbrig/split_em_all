import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  HeaderTitle,
} from '../configs/routes.js';

export default class Settings extends Component {
  render() {
    return (
      <View style = {styles.headerBar}>
        <HeaderTitle headerText = 'Settings'/>
        <View style = {styles.backgroundSettings}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBar: {
    flexGrow: 1,
  },
  backgroundSettings: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1b1f26',
  },
});
