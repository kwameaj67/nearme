
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Homescreen from './src/screens/Homescreen';
import SignUp from './src/screens/Auth/Signup';
import AuthLoading from './src/screens/Auth/AuthLoading';
import Camera from './src/screens/Mainscreens/Camera';
import Message from './src/screens/Mainscreens/Message';
import Posts from './src/screens/Mainscreens/Post';

import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyCVCk_pFC4tA4__PYpsLy85o8g43VwZsRo",
  authDomain: "nearme-649cf.firebaseapp.com",
  databaseURL: "https://nearme-649cf.firebaseio.com",
  projectId: "nearme-649cf",
  storageBucket: "nearme-649cf.appspot.com",
  messagingSenderId: "209266430481",
  appId: "1:209266430481:web:049dd91cb6624efb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const AppStack = createStackNavigator(
  {Home: Homescreen,
   Cam: Camera,
   Msg: Message,
   Post: Posts
  }
  );
const AuthStack = createStackNavigator({SignUp: SignUp });


const AppContainer= createSwitchNavigator({
    AppLoad : AuthLoading,
    App:  AppStack,
    Auth: AuthStack
    },
    {
      initialRouteName: "AppLoad",
    } 
)

export default createAppContainer(AppContainer);



