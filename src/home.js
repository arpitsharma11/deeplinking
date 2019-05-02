import React, { Component } from 'react'
import { Text, Platform, Linking } from 'react-native';

class Home extends Component{

    static navigationOptions = {
        title: 'Home',
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
        const { navigate } = this.props.navigation;
        const route = url.replace(/.*?:\/\//g, '');
        const routeName = route.split('/')[1];
        //alert(route);
        if (routeName === 'profile') {
            navigate('Profile',{} )
        } else if (routeName === 'setting') {
            navigate('Setting',{} )
        } ;
    }
      

    render(){
        return(
            <Text>Home</Text>
        )
    }
}

export default Home;