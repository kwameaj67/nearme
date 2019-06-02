import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export default class Loading extends React.Component{
    render(){
        if(this.props.loading){
            return(
                <ActivityIndicator />
            )     
        }else {
            return(
                <View></View>
            );
        }
    }
}