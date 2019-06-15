import React from 'react';
import { FAB, } from 'react-native-paper';
import {StyleSheet, View} from 'react-native'
import FeedNavigator from '../../navigation/FeedsNavigator';


export default class Home extends React.Component{

    
    state = {
        latitude: null,
        longitude: null
    }

    constructor(props){
        super(props);

       // console.log(props
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
                <FeedNavigator />       
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