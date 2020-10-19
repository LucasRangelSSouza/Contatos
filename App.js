import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { NativeModules, StyleSheet, Text, View } from 'react-native';
import Header from './source/components/Header';
import axios from  'axios';


export default class App extends React.Component {
  

  renderList(){

    axios.get('https://randomuser.me/api/?nat=br&results=5').then( response =>{
      console.log(response.data.results);
    }

    )

      const elementosLista = nomes.map((nome,i)=>{
        return <Text key={i}>{nome}</Text>
      })

      return  elementosLista;
  }

  render() {   
    return (
      <View>
        <Header titulo="Contatos"/>
        { this.renderList() }
      </View>
    );
  }
}
