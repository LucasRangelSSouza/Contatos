import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PeopleListItems = props=>{
    const{pessoa} = props;
    const {title} = pessoa.name;
    const {first} = pessoa.name;
    const {last} = pessoa.name;

    return(
        <View style={estilo.line}>
            <Text style={estilo.texto} >{title}    {first} {last}</Text>
        </View>
    );
}



const estilo = StyleSheet.create({
   
    line :{
        height:60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection:'row'
    },
    
    texto:{
        fontSize : 20,
        paddingLeft: 15,
    }


})
export default PeopleListItems