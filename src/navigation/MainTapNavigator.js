import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen/Homescreen';
import Camera from '../screens/HomeScreen/Camera';
import Messages from '../screens/HomeScreen/Message';
import Post from '../screens/HomeScreen/Post';
import Settings from '../screens/Settings/Settings';
import TabBarIcon from '../Components/TabBarIcon';
import FeedsHome from '../screens/Feeds/Home';
import Notifications from '../screens/Notifications/Notifications';

import Colors from '../constants/Colors'
const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Camera: Camera,
        Messages: Messages,
        Post: Post
    }
)

HomeStack.navigationOptions = {
    tabBarLabel : "Home",
    tabBarIcon :({focused}) => (
        <TabBarIcon name="home"
                    icon ="ant"
                    focused = {focused} />
    )
}
const Feeds = createStackNavigator({
    Indes : FeedsHome,
    Post : Post
}, {
    defaultNavigationOptions: {
        headerStyle: {
          elevation: 0
        }
    }
})

Feeds.navigationOptions = {
    tabBarLabel: "Feeds",
    tabBarIcon :({focused}) => (
        <TabBarIcon name="message1"
                    icon ="ant"
                    focused = {focused} />
    )
     
}

const SettingsStack = createStackNavigator({
        Settings: Settings
})

const NotificationsStack = createStackNavigator({
    Notifications: Notifications
})

NotificationsStack.navigationOptions = {
    tabBarLabel : "Notifications",
    tabBarIcon :({focused}) => (
        <TabBarIcon name="bells"
                    icon ="ant"
                    focused = {focused} />
    )
}


SettingsStack.navigationOptions ={
    tabBarLabel: "Settings",
    tabBarIcon :({focused}) => (
        <TabBarIcon name="setting"
                    icon ="ant"
                    focused = {focused} />
    )
}

export default  createBottomTabNavigator({
     HomeStack,
     Feeds,
     NotificationsStack,
     SettingsStack
},{
animationEnabled: true, tabBarOptions: {
    activeTintColor: Colors.tintColor,
    style:{
        borderTopColor: Colors.tintColor,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: "#E8E9E9"
    },
    labelStyle: {
        fontSize: 12
    },
    allowFontScaling: true
}}
)
