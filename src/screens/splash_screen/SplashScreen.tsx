import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { StackNavigatorScreen } from '../../models/StackNavigationProp'
import { COLORS } from '../../constants/colors'

const SplashScreen=() => {
    useEffect (()=>{
        setTimeout(()=>{
            // navigation.navigate()
        },2000)
    })
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../../assets/image/SplashScreenImage.png')}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.BLACK,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:189,
    height:189
  }
})

export default SplashScreen