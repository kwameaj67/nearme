import React from 'react';
import {View} from 'react-native';
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
        <Button  color='black' icon="add-a-photo" mode="text"  onPress ={() => navigation.navigate("Cam")}/>

       ),
       headerRight: (
          <View style={{flex:1, flexDirection:"row"}}>
             <Button color='#0879F0'  mode="text" onPress ={ () => navigation.navigate('Post')}>
                POST
           </Button>
           <Button color='#0879F0' icon = "near-me" mode="text" onPress ={ () => navigation.navigate('Msg')}>
                DMs
           </Button>
          </View>
          
           
       ),
       
    }
   }

   constructor(props){
       super(props);
       this.state ={
            index :0,
            routes : [
                {key: 'home', title: "Home", icon: 'home', color:'#0879F0', navigation: this.props.navigation},
                {key: 'liked', title: "Most Liked", icon: 'favorite-border', color: '#F41947', navigation: this.props.navigation},
                {key: 'commented', title: "Most Commented", icon: 'chat', color:'#FA9F12', navigation: this.props.navigation},
                {key: 'settings', title: "Settings", icon: 'menu', color: '#9C12FA', navigation: this.props.navigation},
            ]
        
    
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

    
    
  

    render(){
        return(
            
           <BottomNavigation 
            navigationState= {this.state}
            renderScene = {this._renderScene}
            onIndexChange = {this._handleIndexChange}/>
          
        );
    }
}



