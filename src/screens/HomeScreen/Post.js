import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, TextInput, AsyncStorage} from 'react-native';
import TapIcon from '../../Components/TabBarIcon';
import {FAB} from 'react-native-paper';


export default class Post extends React.Component{

    state= {
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
        this.setState({text: target.nativeEvent.text});
    }

    componentDidMount=()=>{
        this.gerarateRandomColor();
       const loc = navigator.geolocation.getCurrentPosition((position) => {
                    this.setState({
                     post:{
                        location: {
                            lat: position.coords.latitude,
                            long: position.coords.longitude
                        }
                    }
                })
        },(positionError) => {
            console.log(positionError)
        }, { enableHighAccuracy: true});
    }

    gerarateRandomColor=()=>{
        const size = this.state.colors.length;
        const colorNumber = Math.floor( Math.random()* (size),0)
        this.setState({selectedColor: this.state.colors[colorNumber],
                post: {
                    color: this.state.colors[colorNumber]
                }
        })
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
    render(){  
        return(
            <View style={styles.container} >
                <TextInput
                 scrollEnabled={true}
                 multiline={true}
                 maxLength={250}
                 style={[styles.textInputStyle]}
                 placeholder="What's Happening? Share with the world"
                 onChange ={(target) => this._handleOnTextChange(target)}
                 ></TextInput>
                <FAB
                 style={[styles.fab, {backgroundColor:this.state.selectedColor}]}
                 icon ="add"
                 color ="white"
                 onPress ={() => this.props.navigation.goBack()}
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


