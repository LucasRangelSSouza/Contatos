import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Label = (props)=>(
        
        <Text style={Estilos.label}>{props.titulo}</Text>
    )

const Estilos = StyleSheet.create({
    
    label:{
        fontWeight: 'bold',
        paddingLeft: 15,
        flex: 1,
        fontSize: 15
    },
})

export default Label;