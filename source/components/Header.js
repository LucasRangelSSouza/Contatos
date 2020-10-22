import React from 'react';
import {View, Text, StyleSheet} from 'react-native'



const Header = (props)=>(

    <View style={Estilos.container}>
        <Text style={Estilos.titulo}>{ props.titulo }</Text>
    </View>

);

const Estilos = StyleSheet.create({
    
    container : {
        marginTop: 20,
        backgroundColor: '#3711C0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo : {
        fontSize: 35,
        color: '#fff',
    }
})

export default Header;