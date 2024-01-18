import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import { FONTS } from '../../constants/fonts'
import TextInputStyle from '../../components/TextInput/TextInputStyle'
import ButtonStyle from '../../components/Button/ButtonStyle'

const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={require('../../../assets/image/SplashScreenImage.png')} />
      <Text style={styles.titleLogin}>Welcome to Lungo !!</Text>
      <Text style={styles.desLogin}>Login to Continue</Text>
      <TextInputStyle placeholder='Email Address' />
      <TextInputStyle placeholder='Password' password={true}/>
      <ButtonStyle style={{marginTop:45}} textName='Sign In'/>
      <ButtonStyle style={{backgroundColor:COLORS.WHITE}} icon={true} textName='Sign in with Google'/>
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
    logoImage:{
        width: 142,
        height:142,

    },
    titleLogin:{
        fontFamily:FONTS.BOLD,
        color:COLORS.WHITE,
        fontSize:16
    },
    desLogin:{
        fontFamily:FONTS.BOLD,
        color:COLORS.GRAY,
        fontSize:12,
        marginBottom:30
    },
})

export default Login