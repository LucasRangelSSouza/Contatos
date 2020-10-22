import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { NativeModules, StyleSheet, Text, View } from 'react-native';
import Header from './source/components/Header';
import PeopleList from './source/components/PeopleList';
import axios from  'axios';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pessoas: []
    }

  };

  componentDidMount(){
    axios.get('https://randomuser.me/api/?nat=br&results=5').then( response =>{
      const { results} = response.data;
      this.setState({
        pessoas: results
      });
    } )
  }
  
  render() {    
    return (
      <View>
        <Header titulo="Contatos"/>
        <PeopleList listaDePessoas = {this.state.pessoas}/>
      </View>
    );
  }
}
