import React from 'react';
import { FAB, } from 'react-native-paper';
import {StyleSheet, View, StatusBar} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
export default class Home extends React.Component{
    state = {
        latitude: null,
        longitude: null
    }

    constructor(props){
        super(props);

       // console.log(props)

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
                onPress ={() => this.props.navigation.navigate("Post")}
                /> 
                <AntDesign name="home" size={32} />
            </View>           
        )
    }
}

const styles = StyleSheet.create({
    statusBar : {
        height: 50
    },
    fab: {
        backgroundColor: '#0879F0',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})