import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style = {styles.container}>
        <TouchableOpacity>
            <Image style = {styles.logo} source = {require('../../assets/images/fibabanka-logo.png')} /> 
        </TouchableOpacity>
        <View style={styles.iconContainer}>
        <TouchableOpacity>
            <Image style = {styles.logo} source = {require('../../assets/images/fibabanka-logo.png')} /> 
        </TouchableOpacity>

        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItem:'center',
        flexDirection:'row',
        marginHorizontal:20
    },

    iconContainer:{
        flexDirection:'row',
        color:'white'
    },
    
    logo:{
        width:100,
        height:60,
        resizeMode:'contain'
    }
})

export default Header