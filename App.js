import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import PeoplePage from './source/pages/PeoplePage';
import PeopleDetailPage from './source/pages/PeopleDetailPage';

/* App.js é nossa classe "main" ela é invocada assim que o programa é iniciado
 */


 //App navigator é o responsavel por definir a estrutura de navegaçao
const AppNavigator = createStackNavigator({
  //Primeiro Parametro do app Navigator, deve conter todas as paginas de navegaçoes
  
  'Main':{
    screen: PeoplePage
  },
  'PeopleDetailPage':{
    screen: PeopleDetailPage,
    navigationOptions:({navigation})=>{
      const nomePessoa = navigation.state.params.pessoa.name.title+' '+navigation.state.params.pessoa.name.first;
      return({
        title: nomePessoa,
        headerTitleStyle:{ 
          fontSize: 25,
          color: '#fff',
          flexGrow: 1
        }

      });
    },

  }

  //---fim do primeiro parametro
} , {

  //Segundo parametro de app navigator

    defaultNavigationOptions: {
      title: 'Contatos',
      headerTintColor: 'white',
      headerStyle:{
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5',
        backgroundColor: '#829FD9',
      },
      headerTitleStyle:{
        fontSize: 25,
        color: '#fff',
        flexGrow: 1,
        textAlign: 'center',
      }
    }
  });

//Ap container é o container do nosso AppNavigator, para que possamos exportar o container e randeriza-lo
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;