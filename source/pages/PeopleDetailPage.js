import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { NativeModules, StyleSheet, Text, View } from 'react-native';
import Avatar from '../components/Avatar'
import Dados from '../components/Dados'

export default class PeopleDetailPage extends React.Component{
    
    constructor(props){
    super(props);
    
    
    this.state = {
      pessoas: []
    }

  };

  render() { 
    const {pessoa} = this.props.navigation.state.params;
    return (
      <View>
        <Avatar imagem ={pessoa.picture.large}/>
        <Dados pessoa ={pessoa}/>
      </View>
    );
  }


}