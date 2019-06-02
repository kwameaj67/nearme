import React from 'react';
import { FAB, } from 'react-native-paper';
import {StyleSheet, View} from 'react-native'

export default class Home extends React.Component{
    state = {
        latitude: null,
        longitude: null
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((position) => {
           this.setState({
               latitude : position.coords.latitude,
               longitude: position.coords.longitude
           });
       },
       (error) => {this.setState({
           error: error.message
       })
       console.warn(error)
       },
       {enableHighAccuracy:true}
       )
   } 
    render(){
        return(
            <View style={{flex: 1}}>
                 <FAB
                style={styles.fab}
                icon ="add"
                color ="white"
                onPress ={() => this.props.route.navigation.navigate("Post")}
                /> 
            </View>           
        )
    }
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#0879F0',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})