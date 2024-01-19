import {Image, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

interface propsButton{
    textName?: string;
    onPress?:  () => void;
    styleButton?: StyleProp<TextStyle>;
    styleText?: StyleProp<TextStyle>;
    icon?:boolean;
}
const ButtonStyle:React.FC<propsButton> = (props) => {
    const {textName,onPress,styleButton,icon,styleText}=props
    const ArraystyleButton: StyleProp<ViewStyle> = [styles.buttonStyle, styleButton];
    const ArraystyleText: StyleProp<TextStyle> = [styles.textStyle, styleText];
  return (
    <TouchableOpacity style={ArraystyleButton} onPress={onPress}>
      {icon && (
        <Image source={require('../../../assets/image/iconGoogle.png')}/>
      ) }
      <Text style={ArraystyleText}>{textName}</Text>
    </TouchableOpacity>
  )
}
const styles =StyleSheet.create({
    buttonStyle:{
      paddingHorizontal:20,
      width:348,
      height:57,
      backgroundColor:COLORS.BROWN,
      borderRadius:20,
      alignItems:'center',
      marginTop:15,
      flexDirection:'row'
    },
    textStyle:{
      width:300,
      color:COLORS.WHITE,
      fontFamily:FONTS.BOLD,
      fontSize:14,
      textAlign:'center'
    }
})
export default ButtonStyle