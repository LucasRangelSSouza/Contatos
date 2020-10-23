import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { NativeModules, StyleSheet, Text, View,ActivityIndicator } from 'react-native';
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
      pessoas: [],
      loading: false,
      error: false
    }

    //Ao fim da execuçao desse metodo, o metodo render é chamado
  };

  /*
  Esse metodo é um metodo reservado, que é chamado logo apos o render ser invocado,
  como o propio nome diz ele é chamado junto com a montagem (randerizaçao) dos componentes
  */
  componentDidMount(){
    
    this.setState({loading:true});

    setTimeout(()=>{
      axios.get('https://randomuser.me/api/?nat=br&results=100').then( response =>{
        const { results} = response.data;
        this.setState({
          pessoas: results,
          loading: false,
        }
        );
      } 
      ).catch( error=>{
        this.setState({
          loading: false,
          error: true
        }
        );
      }
      )
    },1500)
  }
  
  renderViews(){
    if(this.state.loading){
      return(<ActivityIndicator size='large' color='#829FD9'/> );
    } else{
      if(this.state.error){
        return(<Text style={estilo.erro} >OPS ... Algo de errado não está certo =( </Text>);
      } else{
        return(
          <PeopleList 
                listaDePessoas = {this.state.pessoas}
                onPress = {(pageParams)=>{
                  this.props.navigation.navigate('PeopleDetailPage',pageParams);
                }}
              />
        );
      }
    }

  }

  /*
  O metodo render é o metodo que randeriza a nossa view, w os componentes
  */ 
  render() {   
    return (
      <View style={estilo.container}>
        {
         this.renderViews()
        }
      </View>
    );
  }

}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  erro:{
    color:'red',
    alignSelf: 'center',
    fontSize: 18
  }

});

