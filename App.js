
//import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import React from 'react'
import AppContainer from './src/navigation/AppNavigator';



import firebase from './src/Utils/Firebase';


export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    )
  }
}