import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Linha from './Linha';



const Dados = props=>{
    
    const dados = [
        ['Nome',`${props.pessoa.name.first} ${props.pessoa.name.last}`],
        ['E-mail',props.pessoa.email],
        ['Cidade',props.pessoa.location.city],
        ['Estado',props.pessoa.location.state],
        ['Telefone',props.pessoa.phone],
        ['Celular',props.pessoa.cell],
        ['UF',props.pessoa.nat]];
    
    return(
        <View style={estilo.tabela}>
            {dados.map((dados,i)=>{
                return(
                    <Linha key={i} dados={dados}/>
                )
            })}
        </View>
        );
}



const estilo = StyleSheet.create({ 
    
    tabela :{
        backgroundColor: '#e6e8eb',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
    },

})
export default Dados