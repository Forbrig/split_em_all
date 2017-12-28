import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  HeaderTitle,
} from '../configs/routes.js';

export default class Home extends Component {
  render() {
    return (
      <View style = {styles.headerBar}>
        <HeaderTitle headerText = 'Home'/>
        <View style = {styles.backgroundHome}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBar: {
    flexGrow: 1,
  },
  backgroundHome: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#16191e',
  },
});
