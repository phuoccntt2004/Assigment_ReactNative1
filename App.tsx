import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './src/screens/splash_screen/SplashScreen'
import Login from './src/screens/auth/Login'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigations'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App