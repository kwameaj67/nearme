import React from 'react';
import { FAB, } from 'react-native-paper';
import {StyleSheet, View} from 'react-native'

export default class MostCommented extends React.Component{

   
    render(){
        return(
            <View style={{flex: 1}}>
                <FAB
                 style={styles.fab}
                 icon ="add"
                 color ="white"
                 onPress ={() => this.props.route.navigation.navigate("Post")}
                    />
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#FA9F12',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
})