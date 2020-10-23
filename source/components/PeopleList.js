import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import PeopleListItems from './PeopleListItems'

const PeopleList = props=>{
   
    const {listaDePessoas, onPress} = props;
     
    return (
    <FlatList 
        style={estilo.container}
        data ={listaDePessoas.sort((a,b)=> a.name.first.localeCompare(b.name.first))}
        renderItem={({item})=>(
            <PeopleListItems
                pessoa={item}
                onPress={onPress}
            />
        )}
        keyExtractor={item=>item.login.sha256}
    />
    );
};

const estilo = StyleSheet.create({
    container : {
        backgroundColor: '#e6e8eb',

    },

})

export default PeopleList