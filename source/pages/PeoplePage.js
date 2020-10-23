import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { NativeModules, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import axios from  'axios';


/*Existem dois tipos de componentes, os functional e o statefull
um componente stateful possui um estado, por isso precisa de atributos e metodos
entao é implementado utilizando uma classe, como a classe abaixo
que é o componente statefull de uma pagina
*/
export default class PeoplePage extends React.Component {
  
    //Metodo construtor da classe
    constructor(props){
    super(props);
    
    /* Aqui eu crio os meus atributos, nao basta eu criar uma variavel
    tenho q criar um dicionario em que cada chave é um atributo, pois o react
    ao atualizar o state de um componente, ele nao o recria, mas faz um merge
    */
    this.state = {
      pessoas: []
    }

    //Ao fim da execuçao desse metodo, o metodo render é chamado
  };

  /*
  Esse metodo é um metodo reservado, que é chamado logo apos o render ser invocado,
  como o propio nome diz ele é chamado junto com a montagem (randerizaçao) dos componentes
  */
  componentDidMount(){
    axios.get('https://randomuser.me/api/?nat=br&results=15').then( response =>{
      const { results} = response.data;
      this.setState({
        pessoas: results
      });
    } )
  }
  
  /*
  O metodo render é o metodo que randeriza a nossa view, w os componentes
  */ 
  render() {
    //this.props.navigation.navigate('PeopleDetailPage');    
    return (
      <View>
        {/*<Header titulo="contatos"/>*/}
        <PeopleList 
          listaDePessoas = {this.state.pessoas}
          onPress = {(pageParams)=>{
            this.props.navigation.navigate('PeopleDetailPage',pageParams);
          }}
          />
      </View>
    );
  }
}
