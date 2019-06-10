import React from 'react';
import {View, Text} from 'react-native';

export default class Post extends React.Component{
    static navigationOptions ={
        title: "Write a Post"
    }
    render(){
        return(
            <Text>Post</Text>
        )
    }
}