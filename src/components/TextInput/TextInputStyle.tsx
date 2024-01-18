import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { FONTS } from '../../constants/fonts'
import { COLORS } from '../../constants/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


interface PropsInputText{
    placeholder?:string,
    onChangeText?:(text:string)=>void,
    password?:boolean
    value?:string
    error?:string
}
const TextInputStyle:React.FC<PropsInputText> = (props) => {
    const {placeholder,onChangeText,password,value,error}=props
    const [hidePassword, setHidePassword] = React.useState(password);
  return (
    <View>
        <View style={{...styles.container,borderColor:error?COLORS.RED:COLORS.GRAY}} >
            <TextInput  
                style={{color:COLORS.GRAY, fontFamily:FONTS.REGULAR, width:340}}
                placeholderTextColor={COLORS.GRAY}
                placeholder={placeholder} 
                onChangeText={onChangeText} 
                secureTextEntry={hidePassword} 
                value={value}
            />
            {password &&(
                <Icon 
                    onPress={()=> setHidePassword(!hidePassword)}  
                    name={hidePassword ? 'eye-outline' : 'eye-off-outline'} 
                    style={{color: COLORS.GRAY, fontSize: 22, marginLeft:-30}}/>
            )}
        </View>
        {error && (
            <Text style={styles.styleError}>{error}</Text>
        )}


    </View>
  )
}
const styles =StyleSheet.create({
    
    container:{
        flexDirection:'row',
        paddingHorizontal:5,
        width:348,
        height:48,
        borderRadius:8,
        marginTop:10,
        borderWidth:1,
        justifyContent:'space-between',
        alignItems:'center',
    },

   
    styleError:{
        color:COLORS.RED,
        fontFamily:FONTS.BOLD,
        fontSize:11
    }
})

export default TextInputStyle