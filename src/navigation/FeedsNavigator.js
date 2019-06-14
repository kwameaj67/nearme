import React from 'react';
import {createMaterialTopTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation' 
import PostDetails from '../screens/Feeds/PostDetails';
import Post from '../screens/HomeScreen/Post';
import MostCommented from '../screens/Feeds/MostCommented';
import MostLiked from '../screens/Feeds/MostLiked';
import TabBarIcon from '../Components/TabBarIcon';
import Colors from '../constants/Colors'

const CommentStack = createStackNavigator({
    MostCommented,
},{
    headerMode:"none"
} )

CommentStack.navigationOptions = {
    tabBarLabel: "Most Commented",
    tabBarIcon :({focused}) => (
        <TabBarIcon name="ios-chatbubbles"
                    focused = {focused} />)
}

const LikedStack = createStackNavigator({
    MostLiked,
}, {headerMode: 'none'})


LikedStack.navigationOptions = {
    tabBarLabel: "Most Liked",
    tabBarIcon :({focused}) => (
        <TabBarIcon name="hearto"
                    icon="ant"
                    focused = {focused} />),
    
}

export default createAppContainer(createMaterialTopTabNavigator({
    Main: LikedStack,
    CommentStack
},{
    initialRouteName : "Main",
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: Colors.tintColor,
        inactiveTintColor: Colors.tabIconDefault,
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: 'white'
        },
        tabStyle: ''
    },
    swipeEnabled: true,
}
))