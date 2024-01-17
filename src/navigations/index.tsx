import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/splash_screen/SplashScreen';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator>
                <Stack.Screen name='dsa' component={SplashScreen}/>
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