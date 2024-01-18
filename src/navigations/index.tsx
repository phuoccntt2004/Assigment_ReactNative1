import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/splash_screen/SplashScreen';
import { SCREENS } from '../constants/screen';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import TabHome from './../screens/tabs/TabHome';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={SCREENS.SPLASH_SCREEN}>
            <Stack.Screen name={SCREENS.SPLASH_SCREEN} component={SplashScreen}/>
            <Stack.Screen name={SCREENS.LOGIN} component={Login}/>
            <Stack.Screen name={SCREENS.REGISTER} component={Register}/>
            <Stack.Screen name={SCREENS.HOME} component={TabHome}/>

        </Stack.Navigator>
  )
}
const TabBottom = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='dsa' component={SplashScreen}/>
        </Tab.Navigator>
    )
}
export default StackNavigator