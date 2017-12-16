import React from 'react';
import { TabNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
} from 'react-native';

 //path for the screens wich will be used in tabNavigator (I fucking love tabNavigator)
import Login from './screens/login.js' ;
import Home from './screens/home.js' ;
//import 'Name' from 'path';

//stylishing the tab navigator
const navigatorStyles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: 80,
  },
});

const SplitemApp = TabNavigator({
  Login: {screen: Login},
  Home: {screen: Home},
  }, {
  tabBarPosition: 'bottom',
  swipeEnable: true,
  tabBarOptions: {
    indicatorStyle: {
          backgroundColor: 'green',
          height: 45
      },
      activeTintColor: 'white',
      pressColor: 'white',
      style: {
        backgroundColor: 'darkgreen',
        height: 45,
      }
    /*
    labelStyle: {
      fontSize: 18,
    },
    style: {

      backgroundColor: 'darkgreen',
    },
    */
  }
});

const App = () => {
    return (
      <SplitemApp />
    );
};

export default App;
