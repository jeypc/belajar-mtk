import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './../pages/Home'
import Penambahan from './../pages/Penambahan'
import Pengurangan from './../pages/Pengurangan'
import Perkalian from './../pages/Perkalian'
import Pembagian from '../pages/Pembagian';

const AppNavigation = createStackNavigator({
  Home: {
    screen: Home
  },
  Penambahan: {
    screen: Penambahan
  },
  Pengurangan: {
    screen: Pengurangan
  },
  Perkalian: {
    screen: Perkalian
  },
  Pembagian: {
    screen: Pembagian
  }
}, {
  headerMode: 'none'
});

export default createAppContainer(AppNavigation)