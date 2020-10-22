import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { NativeModules, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import axios from  'axios';


export default class PeoplePage extends React.Component {
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
        <Header titulo="contatos"/>
        <PeopleList listaDePessoas = {this.state.pessoas}/>
      </View>
    );
  }
}
