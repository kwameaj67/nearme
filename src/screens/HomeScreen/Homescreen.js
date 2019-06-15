import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {AntDesign, Feather} from '@expo/vector-icons'
//import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constants/Colors';


export default class Homescreen extends React.Component{
    
    static navigationOptions = ({navigation}) =>{

     return{
         
       headerTitle: "Home",
    
       headerLeft: (
           <TouchableHighlight style={styles.topButtons}
            onPress={() =>navigation.navigate("Post")} underlayColor="white">
                 <AntDesign name="plus" color={Colors.tintColor} size={24}/>
                 
           </TouchableHighlight>  
       ),
       headerRight: (
          <View style={{flex:1, flexDirection:"row"}}>
             <TouchableHighlight style={styles.topButtons}>
                 <View style={{flex:1, flexDirection:'row'}}>
                      <Text style={styles.textStyle}>Karma: 0</Text>
                      <AntDesign name="hearto" color={Colors.tintColor} size={24}/>
                 </View>  
             </TouchableHighlight>
             <TouchableHighlight style={styles.topButtons} underlayColor="white"
             onPress={() =>navigation.navigate("Messages")}
             >
                 <Feather name="send" color={Colors.tintColor} size={24}/>
           </TouchableHighlight>
          </View> ),
    }
   }
   

   constructor(props){
       super(props);
        const homeIcon = (<AntDesign name="home" size={24} />)
       
   }

    render(){
        return(
            <View>
                <Text>Hi</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topButtons: {
        padding:15
    },

    textStyle: {
        paddingRight: 10,
        paddingTop: 2,
        color: Colors.tintColor,
        fontWeight: 'bold'
    }
}
)



