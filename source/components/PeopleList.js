import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PeopleListItems from './PeopleListItems'

const PeopleList = props=>{
   
    const {listaDePessoas} = props;
    const elementos = listaDePessoas.map((pessoa)=>{
    
        return(<PeopleListItems key={pessoa.name.first} pessoa={pessoa}/> );
    });
     
    return (<View style={estilo.container}>{elementos}</View>);
};

const estilo = StyleSheet.create({
    container : {
        backgroundColor: '#e6e8eb',

    },

})

export default PeopleList