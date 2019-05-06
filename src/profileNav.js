import React, { Component } from 'react'
import { Text } from 'react-native';

import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Deatils from './details';
import Profile from './profile';
import Photos from './photos';

const ProfileNav = createBottomTabNavigator({
    Profile: { screen: Profile },
    Deatils: { screen: Deatils },
    Photos: { screen: Photos}
  },{
    initialRouteName : 'Profile',
    //headerMode : 'none'
});

export default createAppContainer(ProfileNav);