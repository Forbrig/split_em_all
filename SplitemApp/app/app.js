import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
} from 'react-native';

 //path for the screens wich will be used in tabNavigator (I fucking love tabNavigator)
import Login from './screens/login.js' ;
import Home from './screens/home.js' ;

const SplitemApp = StackNavigator({
  Login: {
    //hide stackbar on top of the screen
    screen: Login,
    navigationOptions: {
      header: false,
    },
  },

  /*Begin of tabNavigator (nested on StackNavigator), after login*/
  LoggedInBundle: {
    screen: TabNavigator({
      Home: {
        screen: Home
      },
    }, {
      navigationOptions: {
        header: true,
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
    }),
  },
});
const App = () => {
    return (
      <SplitemApp />
    );
};

export default App;
