import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Conteudo = (props)=>(
        <Text style={Estilos.conteudo}>{props.conteudo}</Text>
)

const Estilos = StyleSheet.create({
    
    conteudo:{
        flex: 4
    },
})

export default Conteudo;