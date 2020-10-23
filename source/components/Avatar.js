import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';




const Avatar = props=>{
    return(

        <View style={estilo.container}>
            <Image style={estilo.avatar} source={{uri: props.imagem}}/>
        </View>
     
    );
}



const estilo = StyleSheet.create({ 
    
    container :{
        paddingTop:15,
        paddingLeft: 70,
        paddingRight: 70,
        paddingBottom: 15,
    },

    avatar:{
        aspectRatio: 1,
        borderRadius: 110

    }


})
export default Avatar