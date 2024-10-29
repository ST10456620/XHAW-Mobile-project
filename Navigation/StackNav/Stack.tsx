import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/home';
import Detail from '../../pages/details';
import Login from '../../pages/login';
import DrawerNavigation from '../DrawerNav/DrawerLayout';

export type stackScreens={
    Login: undefined;
    HomeEntry: undefined;
    Details: undefined;
}

const Stack = createNativeStackNavigator<stackScreens>();

const StackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeEntry" component={DrawerNavigation} />
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>

    )
}

export default StackNavigation