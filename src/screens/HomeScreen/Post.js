import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, TextInput, AsyncStorage} from 'react-native';
import TapIcon from '../../Components/TabBarIcon';
import {FAB} from 'react-native-paper';
import axios from 'axios';
import Loading from '../../Components/Loading';
import LocationBar from '../../Components/LocationBar';


export default class Post extends React.Component{

    state= {
        loading: false,
        post: {
            location:{
                lat: null,
                long: null
            },
            color: 'black',
            hashtags: [],
            text: '',
            image: null,
            type: 'text'
        },

        selectedColor: "black",
        colors: [
            '#2091DA',
            '#F1C40F',
            '#FF5733',
            '#2ECC71',
            '#1F618D',
            '#6C3483'
        ]
    }

    _handleOnTextChange=(target)=>{
        const newState = Object.assign({}, this.state);
        newState.post.text = target.nativeEvent.text;
        this.setState(newState);
    }

    componentDidMount=()=>{
        this.gerarateRandomColor();
        navigator.geolocation.getCurrentPosition((position) => {
                   var newState = Object.assign({}, this.state)
                   newState.post.location.lat = position.coords.latitude;
                   newState.post.location.long = position.coords.longitude;
                   this.setState(newState);
                // console.log(this.state);
        },(positionError) => {
            console.log(positionError)
        }, { enableHighAccuracy: true});

    }

    gerarateRandomColor=()=>{
        const size = this.state.colors.length;
        const colorNumber = Math.floor( Math.random()* (size),0)
        var newState = Object.assign({}, this.state);
        newState.selectedColor = this.state.colors[colorNumber];
        newState.post.color=this.state.colors[colorNumber];
        this.setState(newState);
    }

    static navigationOptions=({navigation}) =>{
        return{
        title: "Write a Post",

        headerRight: (
            <TouchableHighlight style={{padding: 15}}  onPress={() => navigation.navigate("Camera")}>
                <TapIcon name="md-camera" icon="ion" focused={true} />
            </TouchableHighlight>
        ),
        
       }
    }

    _handlePostSubmit=()=>{
            this.setState({loading: true})
            console.log(this.state.post);
                axios.post("https://near-me-api.herokuapp.com/post", this.state.post).then((res) => {
                        this.setState({loading: false})
                }).catch((err) => {
                        this.setState({loading: false});
                })
            
           
    }
    render(){  
        return(
            <View style={styles.container}>
                <LocationBar lat={this.state.post.location.lat} long={this.state.post.location.long} />
                <TextInput
                 scrollEnabled={true}
                 multiline={true}
                 maxLength={250}
                 style={[styles.textInputStyle]}
                 placeholder="What's Happening? Share with the world"
                 onChange ={(target) => this._handleOnTextChange(target)}
                 ></TextInput>
                 <Loading loading={this.state.loading} />
                <FAB
                 style={[styles.fab, {backgroundColor:this.state.selectedColor}]}
                 icon = "check"
                 color ="white"
                 onPress ={() => this._handlePostSubmit()}
                 visible ={!this.state.loading}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInputStyle:{

        margin: 15,
        fontSize: 20,
        height: 150
    },

    container: {
        flex: 1
    },
    fab: {
        backgroundColor: '#FA9F12',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})


