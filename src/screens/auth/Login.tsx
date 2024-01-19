import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constants/colors'
import { FONTS } from '../../constants/fonts'
import TextInputStyle from '../../components/TextInput/TextInputStyle'
import ButtonStyle from '../../components/Button/ButtonStyle'
import TextButton from '../../components/textButton/TextButton'
import { StackNavigatorScreen } from '../../models/StackNavigationProp'
import { SCREENS } from '../../constants/screen'



const Login:React.FC<StackNavigatorScreen> = (props) => {
  const {navigation}=props
  const [checkError,setError]=useState<User>({})
  const [emailValue,setEmailValue] = useState('')
  const [passwordValue,setPasswordValue] = useState('')
  const isEmpty = (text: String) => {
    if (text === '') return true
  }

  const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email
      return emailRegex.test(email);
  };
  //  Hàm này nhận vào trạng thái trước đó (prevState) và trả về một đối tượng mới để cập nhật trạng thái. Trong trường hợp này, nó sao chép tất cả các thuộc tính từ trạng thái trước đó (...prevState) và sau đó cập nhật giá trị của thuộc tính
  const handleError = (error:string, input:keyof User) => {
    setError((prevState) => ({...prevState, [input]: error}));
  };
  const ClickLogin =()=>{
    if(isEmpty(emailValue)){
      handleError('Please input email','email')
    }else if(!validateEmail(emailValue)){
      handleError('Email is in wrong format','email')
    }else{
      handleError('','email')
      if(isEmpty(passwordValue)){
        handleError('Please input password','password')
      }else{
        handleError('','password')
        navigation.replace(SCREENS.HOME)
      }
    }
  }
  const RegisterClick = ()=>{
    navigation.navigate(SCREENS.REGISTER)
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={require('../../../assets/image/SplashScreenImage.png')} />
      <Text style={styles.titleLogin}>Welcome to Lungo !!</Text>
      <Text style={styles.desLogin}>Login to Continue</Text>
      <TextInputStyle placeholder='Email Address' onChangeText={setEmailValue} error={checkError.email} />
      <TextInputStyle placeholder='Password' password={true} onChangeText={setPasswordValue} error={checkError.password} />
      <ButtonStyle styleButton={{marginTop:45}} onPress={ClickLogin} textName='Sign In'/>
      <ButtonStyle 
        styleButton={{backgroundColor:COLORS.WHITE, marginBottom:25}} 
        styleText={{color:COLORS.BLACK}} 
        icon={true} 
        textName='Sign in with Google'/>
      <TextButton TextValues='Don’t have account? Click' TextClick='Register' onPressClick={RegisterClick}/>
      <TextButton TextValues='Forget Password? Click' TextClick='Reset'/>

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