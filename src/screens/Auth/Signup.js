import React from 'react';
import firebase from '../../Utils/Firebase';
import { AsyncStorage, LayoutAnimation, Platform, Text, View, TouchableOpacity, StyleSheet, TextInput, PermissionsAndroid,} from 'react-native';
import Loading from '../../Components/Loading';
import axios from 'axios'



export default class Signup extends React.Component{
    static navigationOptions = {
        title: "Welcome"
    }
    state ={
        gender:"",
        age:"18",
        selectedMaleColor: "#09B351",
        selectedFemaleColor: "#09B351",
        loading: false
       // ""   
    }

    _onPress =(gender)=>{
        
        if(gender == "Male"){
            this.setState({
                gender: "Male",
                selectedMaleColor: "#1980F4",
                selectedFemaleColor: "#09B351"     
            })
            
        }else {
            this.setState({
                gender: "Female",
                selectedFemaleColor: "#F41947",
                selectedMaleColor: "#09B351",
            })
        }  
    }
    _handleOnTextChange =(target) => {
        this.setState({
            age: target.nativeEvent.text
            }
        )
    }
   

    _checkAge(age){
        if(age < 18){
            if(this.state.gender == ""){
                alert("Please select your Gender and you're under age. You must be 18 and above")
            }else {
                alert("Please you are under Age, You must me 18 and above")
            }
        }else if (age > 100){
            if(this.state.gender == ""){
                alert("Please Select an Gender and you're age is invalid")
            }else {
                alert("Invalid Age, Enter a correct Age")
            }
        }else {
            if(this.state.gender == ""){
                alert("Please select your Gender");
            }else{
                this.setState({loading:true});
                firebase.auth().signInAnonymously()
                .then((res) => {
                    console.log("SignedIn Anonymously") 
                    AsyncStorage.setItem('userID', res.user.uid )
                    AsyncStorage.getItem('userID', (err, result) => {
                        
                        console.log(result);
                    })
                    var user = {
                        uid: res.user.uid,
                        gender: this.state.gender,
                        age: this.state.age,
                        karma:0
                    }
                    
                    AsyncStorage.setItem('gender', user.gender);
                    //firebase.database().ref('users').child(ref.user.uid).set(user);
                    axios.post('http://192.168.100.14:3089/newUser', user).then((res)=>{
                        this.props.navigation.navigate("App")
                        console.log("Done")
                    }).catch((err)=> console.log(err))
                   
                })
                .catch((err) => console.log(err));
            }
            
        }
    }

    async _requestLocatonPermission(){
        
        try{
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, 
                {
                    title: "Nearby Location Permission",
                    message: "For Nearby to work perfectly, you must allow app to access device Location",
                    buttonPositive: "Ok"
                },
            );

            if(granted == PermissionsAndroid.RESULTS.GRANTED){
                console.log("Granted");
                this.props.navigation.navigate("App");
            }else {
                
                console.log("Location Permission Denied");
            }
        }catch(err){
         
            console.warn(err);
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
                     <TouchableOpacity  style={[styles.touchableButton, {backgroundColor: this.state.selectedMaleColor}]} onPress={() => this._onPress("Male")}>
                        <Text style={styles.buttonTextStyle}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.touchableButton, {backgroundColor: this.state.selectedFemaleColor}]} onPress={() =>this._onPress("Female")}>
                        <Text style={styles.buttonTextStyle}>Female</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.ageInputContainer}>
                    <Text  style={{paddingLeft:10}}>Age</Text>
                    <TextInput  style ={styles.ageTextInput}
                        value = {this.state.age}
                        placeholder="Please Enter your Age"
                        keyboardType= 'number-pad'
                        onChange = {(value) =>this._handleOnTextChange(value)}
                    >              
                    </TextInput>
                </View>  
                <View style ={{flexDirection: 'row'}}>
                <TouchableOpacity  style={styles.touchNextButton} onPress={() =>this._checkAge(this.state.age)}>
                        <Text>Next</Text>
                    </TouchableOpacity>   
                </View>
                <Loading 
                    loading={this.state.loading}
                />
            </View>
        );
    }
}



var styles = StyleSheet.create({
    mainContainer:{   
    },
    touchNextButton:{
        backgroundColor: "#F5F7Fe",
        padding: 10,
        color: 'black',
        marginLeft: 14
    },
    touchableButton: {
        padding: 10,
        backgroundColor: '#09B351',
        margin : 3,
        borderRadius: 5
    },
    touchableSelected: {
        padding: 10,
        backgroundColor: '#F45119',
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