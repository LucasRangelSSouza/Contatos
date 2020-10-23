import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {capitalize} from '../util'



const PeopleListItems = props=>{
    const{pessoa,onPress} = props;
    const {title,first,last} = pessoa.name;
    const {thumbnail} = pessoa.picture;

    return(
        <TouchableOpacity onPress={()=>{
           onPress({pessoa});

        }}>
            <View style={estilo.line}>
                <Image style={estilo.avatar} source={{uri: thumbnail}}/>
                <Text style={estilo.texto} >{`${title}    ${first} ${last}`}</Text>
            </View>
        </TouchableOpacity>
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
        flex: 6,
    },
    
    avatar:{
        marginLeft: 15,
        aspectRatio: 1,
        flex: 1,
        borderRadius: 50

    }


})
export default PeopleListItems