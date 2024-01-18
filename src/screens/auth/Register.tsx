import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import TextInputStyle from '../../components/TextInput/TextInputStyle'
import ButtonStyle from '../../components/Button/ButtonStyle'
import { COLORS } from '../../constants/colors'
import TextButton from '../../components/textButton/TextButton'
import { FONTS } from '../../constants/fonts'
import { StackNavigatorScreen } from '../../models/StackNavigationProp'
import { SCREENS } from '../../constants/screen'

const Register:React.FC<StackNavigatorScreen> = (props) => {
    const [nameValue,setNameValue]=useState('')
    const [emailValue,setEmailValue]=useState('')
    const [passowrdValue,setPasswordValue]=useState('')
    const [rePasswordValue,setRePasswordValue]=useState('')
    const [checkError,setError] = useState<User>()
    const {navigation}=props

    const isEmpty = (text: String) => {
        if (text === '') return true
      }
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email
        return emailRegex.test(email);
    };
    const handleError = (error:string, input:keyof User) => {
        setError((prevState) => ({...prevState, [input]: error}));
    };

    const ClickRegister = ()=>{
        if(isEmpty(nameValue)){
            handleError('Please input name','fullname')
        }else{
            handleError('','fullname')
            if(isEmpty(emailValue)){
                handleError('Please input email','email')
            }else if(!validateEmail(emailValue)){
                handleError('Email is in wrong format','email')
            }else{
                handleError('','email')
                if(isEmpty(passowrdValue)){
                    handleError('Please input password','password')
                }else{
                    handleError('','password')
                    if(!(passowrdValue === rePasswordValue)){
                        handleError('Please enter the correct password','rePassword')
                    }else{
                        handleError('','rePassword')
                        navigation.replace(SCREENS.LOGIN)
                    }
                }
            }
        }
    }


    const ClickLogin=()=>{
        navigation.navigate(SCREENS.LOGIN)
    }
  return (
    <View style={styles.container}>
    <Image style={styles.logoImage} source={require('../../../assets/image/SplashScreenImage.png')} />
    <Text style={styles.titleLogin}>Welcome to Lungo !!</Text>
    <Text style={styles.desLogin}>Login to Continue</Text>
    <TextInputStyle placeholder='Name' onChangeText={setNameValue} error={checkError?.fullname} />
    <TextInputStyle placeholder='Email' onChangeText={setEmailValue} error={checkError?.email}/>
    <TextInputStyle placeholder='Password' onChangeText={setPasswordValue} password={true} error={checkError?.password}  />
    <TextInputStyle placeholder='Re-type password' onChangeText={setRePasswordValue} password={true} error={checkError?.rePassword}  />
    <ButtonStyle styleButton={{marginTop:45}} textName='Register' onPress={ClickRegister}/>
    <TextButton TextValues='You have an account? Click' onPressClick={ClickLogin} TextClick='Sign in' />

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

export default Register