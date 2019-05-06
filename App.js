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

import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from './src/home';
import ProfileNavContainer from './src/profileNav';
import Setting from './src/setting';
import Deatils from './src/details';
import Profile from './src/profile';
import Photos from './src/photos';

const App = createStackNavigator({
  Home: { screen: Home },
  ProfileNav: { screen: createBottomTabNavigator({
    Profile: { screen: Profile },
    Deatils: { screen: Deatils },
    Photos: { screen: Photos}
  },{
    initialRouteName : 'Profile',
    //headerMode : 'none'
}) },
  Setting: { screen: Setting },
},{
  initialRouteName : 'Home'
});

export default createAppContainer(App);