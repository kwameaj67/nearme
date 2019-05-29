
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Homescreen from './src/screens/Homescreen';
import SignUp from './src/screens/Auth/Signup';
import AuthLoading from './src/screens/Auth/AuthLoading';

const AppStack = createStackNavigator(
  {Home: Homescreen},
  {
    initialRouteName: "Home"
  }
  );
const AuthStack = createStackNavigator({SignUp: SignUp });


const AppContainer= createSwitchNavigator({
    AppLoad : AuthLoading,
    App:  AppStack,
    Auth: AuthStack
    },
    {
      initialRouteName: "AppLoad"
    } 
)

export default createAppContainer(AppContainer);



