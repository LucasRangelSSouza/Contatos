import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Label from './Label';
import Conteudo from './Conteudo';


const Linha = (props)=>{
    const titulo = props.dados[0];
    const conteudo = props.dados[1];
    return(
        
        <View style={Estilos.linha}>
            <Label titulo={titulo}/>
            <Conteudo conteudo={conteudo}/>
        </View>
    )
};

const Estilos = StyleSheet.create({
    
    linha:{
        flexDirection: 'row',
        paddingTop:5,
        paddingBottom:5,
        borderWidth: 1,
        borderColor: '#a9a9a9',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 7,

    },
})

export default Linha;