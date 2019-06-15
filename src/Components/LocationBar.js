import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';


export default class Locationbar extends React.Component{
    state={
        address: '',
        done: false
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.lat!==null && !this.state.done){
            fetch(`https://near-me-api.herokuapp.com/address/${nextProps.lat}/${nextProps.long}`)
            .then(res => res.json())
            .then(data => this.setState({address : data, done: true}))
            .catch((err) => console.log(err))
        }else{
            console.log("Location is null")
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <Feather name="map-pin" color="grey" size={18} />
                <Text>{this.state.address}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        color: 'grey'
    }
})