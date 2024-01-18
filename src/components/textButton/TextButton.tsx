import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../../constants/colors'
import { FONTS } from '../../constants/fonts'

interface propsText{
    TextValues?:string,
    TextClick?:string,
    onPressClick?:()=>void
}
const TextButton:React.FC<propsText> = (props) => {
    const{TextValues,TextClick,onPressClick}=props
  return (
   <View style={{flexDirection:'row',alignItems:'center', marginTop:20}}>
        <Text style={styles.Text}>{TextValues}</Text>
        <TouchableOpacity onPress={onPressClick}>
            <Text style={styles.textClick}>{TextClick}</Text>
        </TouchableOpacity>
   </View>
    
  )
}
const styles = StyleSheet.create({
    Text:{
        color:COLORS.GRAY,
        fontFamily:FONTS.BOLD,
        fontSize:12,
        marginRight:5
        
    },
    textClick:{
        color:COLORS.BROWN,
        fontFamily:FONTS.BOLD,
        fontSize:12,
    }
})
export default TextButton