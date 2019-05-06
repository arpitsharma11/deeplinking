import React, { Component } from 'react'
import { Platform, Text, Linking } from 'react-native';

import { NavigationActions } from 'react-navigation';


class Profile extends Component{

    static navigationOptions = {
        title: 'Profile',
    };

    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                this.navigate(url);
            });
        } else {
            Linking.addEventListener('url', this.handleOpenURL);
        }
    }
        
    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = (event) => {
        this.navigate(event.url);
    }

    navigate = (url) => {
        const route = url.replace(/.*?:\/\//g, '');
        const routeName = route.split('/')[2];
        if (routeName === 'details') {
            this.props.navigation.navigate('ProfileNav',{},NavigationActions.navigate({ routeName: 'Deatils' }))
        } else if (routeName === 'photos') {
            this.props.navigation.navigate('ProfileNav',{},NavigationActions.navigate({ routeName: 'Photos' }))
        };
    }

    render(){
        return(
            <Text>Profile</Text>
        )
    }
}

export default Profile;