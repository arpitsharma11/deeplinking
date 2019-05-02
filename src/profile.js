import React, { Component } from 'react'
import { Text } from 'react-native';

class Profile extends Component{

    static navigationOptions = {
        title: 'Profile',
    };

    render(){
        return(
            <Text>Profile</Text>
        )
    }
}

export default Profile;