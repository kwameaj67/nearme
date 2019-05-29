import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

export default class Signup extends React.Component{
    static navigationOptions = {
        title: "Welcome"
    }

    state ={
        gender:"",
        age:"18"
    }

    _onPress =()=>{
        alert("hi");
    }

    _handleOnTextChange =(target) => {
        this.setState({
            age: target.nativeEvent.text
            }
        )
    }

    _checkAge(age){
        if(age < 18){
            console.log("Under Age");
        }else if (age > 100){
            console.log("Ricidulous age");
        }
    }

    render(){
       
        return(
            <View style ={styles.mainContainer}>
                <View style={styles.welcomeTextContainer}>
                    <Text style={{fontSize: 22, textAlign: 'center'}}>Welcome to Near Me</Text>
                    
                </View>
                <View style={styles.genderContainer}>
                    <Text style={{padding:4}}>Please select your Gender</Text>
                     <TouchableOpacity style={styles.touchableButton} onPress={this._onPress}>
                        <Text style={styles.buttonTextStyle}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableButton} onPress={this._onPress}>
                        <Text style={styles.buttonTextStyle}>Female</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.ageInputContainer}>
                    <TextInput  style ={styles.ageTextInput}
                        placeholder="Please Enter your Age"
                        keyboardType= 'number-pad'
                        onChange = {(value) =>this._handleOnTextChange(value)}
                    >
                           
                    </TextInput>

                    <TouchableOpacity  style={styles.touchableButton} onPress={this._checkAge(this.state.age)}>
                        <Text>Click Me</Text>
                    </TouchableOpacity>
                </View>     
            </View>
        );
    }
}

var styles = StyleSheet.create({
    mainContainer:{
       
    },
    touchNextButton:{
        backgroundColor: "#09B351",
        padding : 10
    }
    ,
    touchableButton: {
        padding: 10,
        backgroundColor: '#09B351',
        margin : 3,
        borderRadius: 5
    },

    buttonTextStyle: {
            fontWeight: "700",
            color: 'white',
            textAlign: 'center'
    },

    genderContainer:{
        padding: 10
    },

    welcomeTextContainer:{
       padding:20
    },

    ageInputContainer: {
        padding: 4

    },

    ageTextInput:{
        margin:10,
        padding: 10,
        backgroundColor: '#F5F7F7',
        fontSize: 17
    }


});