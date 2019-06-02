import React from 'react';
import {ActivityIndicator, StatusBar, AsyncStorage,View, StyleSheet} from 'react-native';


export default class AuthLoader extends React.Component {
    constructor(props){
        super(props);
        this._bootstrapAuth();
    }

    _bootstrapAuth = async () =>{
        try{
            const userToken = await AsyncStorage.getItem('userID');
            if(userToken == null){
                this.props.navigation.navigate("Auth");
            }else {
                this.props.navigation.navigate("App");
            }      
        }catch{

        }    
    }

    render(){
        return(
            <View style={styles.container}>
            <ActivityIndicator size='large'/>
            <StatusBar barStyle='default' />    
            </View>   
        )    
    }
}

var styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})