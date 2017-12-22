import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
} from 'react-native';

 //path for the screens wich will be used in tabNavigator (I fucking love tabNavigator)
import Login from './screens/login.js' ;
import Home from './screens/home.js' ;

const SplitemApp = TabNavigator({
  Login: {screen: Login},
  Home: {screen: Home},
  }, {
    navigationOptions: {
      header: false,
    },
    tabBarPosition: 'bottom',
    swipeEnable: true,
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: 'red',
        height: 45
      },
      activeTintColor: 'white',
      pressColor: 'white',
      style: {
        backgroundColor: '#a51d0d',
        height: 45,
      }
    }
});

const App = () => {
    return (
      <SplitemApp />
    );
};

export default App;
