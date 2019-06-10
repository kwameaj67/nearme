
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Homescreen from './src/screens/Homescreen';
import SignUp from './src/screens/Auth/Signup';
import AuthLoading from './src/screens/Auth/AuthLoading';
import Camera from './src/screens/Mainscreens/Camera';
import Message from './src/screens/Mainscreens/Message';
import Posts from './src/screens/Mainscreens/Post';

import firebase from './src/Utils/Firebase';




const HomeStack = createStackNavigator(
  { HomeScreen: Homescreen,
    Post: Posts,
  }
)

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
    Auth: AuthStack,
    },
    {
      initialRouteName: "AppLoad",
    } 
)

export default createAppContainer(AppContainer);