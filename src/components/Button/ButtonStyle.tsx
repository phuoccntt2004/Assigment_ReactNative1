import {StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface propsButton{
    textName?: string;
    onPress?:  () => void;
    style?: StyleProp<TextStyle>;
    icon?:boolean;
}
const ButtonStyle:React.FC<propsButton> = (props) => {
    const {textName,onPress,style,icon}=props
    const styleButton: StyleProp<ViewStyle> = [styles.buttonStyle, style];
  return (
    <TouchableOpacity style={styleButton} onPress={onPress}>
      {icon && (
        <Icon name='google' color={COLORS.BLACK}/>
      ) }
      <Text style={styles.textStyle}>{textName}</Text>
    </TouchableOpacity>
  )
}
const styles =StyleSheet.create({
    buttonStyle:{
      width:348,
      height:57,
      backgroundColor:COLORS.BROWN,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      marginTop:15,
      flexDirection:'row'
    },
    textStyle:{
      color:COLORS.WHITE,
      fontFamily:FONTS.BOLD,
      fontSize:14
    }
})
export default ButtonStyle