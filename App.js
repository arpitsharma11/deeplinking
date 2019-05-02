/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import { createSwitchNavigator,createAppContainer } from 'react-navigation';

import Home from './src/home';
import Profile from './src/profile';
import Setting from './src/setting';

const App = createSwitchNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  Setting: { screen: Setting },
},{
  initialRouteName : 'Home'
});

export default createAppContainer(App);