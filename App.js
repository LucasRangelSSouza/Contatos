import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import PeoplePage from './source/pages/PeoplePage';



const AppNavigator = createStackNavigator({
  'Main':{
    screen: PeoplePage
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;