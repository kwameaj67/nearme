import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import TapIcon from '../../Components/TabBarIcon';

export default class Post extends React.Component{
    static navigationOptions=({navigation}) =>{
        return{
        title: "Write a Post",

        headerRight: (
            <TouchableHighlight style={{padding: 15}}  onPress={() => navigation.navigate("Camera")}>
                <TapIcon name="md-camera" icon="ion" focused={true} />
            </TouchableHighlight>
        )
    }
    }
    render(){
        return(
            <Text>Post</Text>
        )
    }
}


