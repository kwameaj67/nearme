import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, BottomNavigation} from 'react-native-paper';
import Home from './BottomNavigationScreens/Home';
import MostLiked from './BottomNavigationScreens/MostLiked';
import MostCommented from './BottomNavigationScreens/MostCommented';
import Settings from './BottomNavigationScreens/Settings';

export default class Homescreen extends React.Component{
    static navigationOptions = ({navigation}) =>{

     return{
       headerTitle: "Home",

       headerLeft: (
        <Button color='black' icon="add-a-photo" mode="text"  onPress ={() => navigation.navigate("Cam")}/>

       ),
       headerRight: (
           <View style={{flexDirection: 'row'}}> 
           <Button color='#0879F0' icon = "spa" mode="text" onPress ={ () => navigation.navigate('Msg')}>
                Karma : 0
           </Button>
           <Button color='#0879F0' icon = "near-me" mode="text" onPress ={ () => navigation.navigate('Msg')}>
                DMs
           </Button>
           </View>
       )
    }
   }

  
  

   _handleIndexChange =index=> {
       this.setState({index: index});
        Homescreen.index = index;
    }
   
   _renderScene = BottomNavigation.SceneMap({
       home: Home,
       liked: MostLiked,
       commented: MostCommented,
       settings: Settings
   })

   

    state={
        index :0,
        routes : [
            {key: 'home', title: "Home", icon: 'home', color:'#0879F0'},
            {key: 'liked', title: "Most Liked", icon: 'favorite-border', color: '#F41947'},
            {key: 'commented', title: "Most Commented", icon: 'home', color:'#FA9F12'},
            {key: 'settings', title: "Settings", icon: 'menu', color: '#9C12FA'},
        ]
    }

    /*
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
    } */

    render(){
        return(
           <BottomNavigation 
            navigationState= {this.state}
            renderScene = {this._renderScene}
            onIndexChange = {this._handleIndexChange}
           />
        );
    }
}

class HeaderTitle extends React.Component {
    render(){
        return(
            <View>
                <Button mode="text" icon="add-photo">
                    Add Photo
                </Button>
            </View>
        )
    }
}

