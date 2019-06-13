
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import SignUp from '../screens/Auth/Signup';
import LoadingScreen from '../screens/Auth/AuthLoading';
import MainTapNavigator from './MainTapNavigator';

const AuthStack = createStackNavigator({SignUp: SignUp });

export default createAppContainer(createSwitchNavigator({
    AppLoad : LoadingScreen,
    App:  MainTapNavigator,
    Auth: AuthStack,
    },
    {
      initialRouteName: "AppLoad",
    },
))