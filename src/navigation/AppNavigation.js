import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './../pages/Home'
import Penambahan from './../pages/Penambahan'

const AppNavigation = createStackNavigator({
  Home: {
    screen: Home
  },
  Penambahan: {
    screen: Penambahan
  }
}, {
  headerMode: 'none'
});

export default createAppContainer(AppNavigation)