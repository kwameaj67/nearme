import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Homescreen extends React.Component{
  
    state={
        latitude: null,
        longitude: null,
        error: null
    }

    componentDidMount(){
         navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                latitude : position.coords.latitude,
                longitude: position.coords.longitude
            });
        },
        (error) => this.setState({
            error: error.message
        }),
        {enableHighAccuracy:true}
        )
    }
    render(){
        return(
            <View>
                <Text>{this.state.latitude + " " +this.state.longitude}</Text>
            </View>
        );
    }
}

