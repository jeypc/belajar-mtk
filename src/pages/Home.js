import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

var Sound = require('react-native-sound');

const Home = ({ navigation }) => {

  useEffect(() => {
    Sound.setCategory('Playback');
    const backsound = new Sound('backsound.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      backsound.play();
      backsound.setVolume(0);
    });
    return () => {
      backsound.stop()
    };
  }, [])

  const handleClick = (navigateTo) => {
    Sound.setCategory('Playback');
    const click = new Sound('menu_select.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      click.play();
    });
    navigation.navigate(navigateTo)
  }

  return (
    <ImageBackground resizeMode={'cover'} style={{ width: '100%', height: '100%' }} source={require('./../../assets/img/main-bg.png')}>
      <SafeAreaView>
        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 40 }}>
          <Image style={{ width: '100%' }} source={require('./../../assets/img/logo.png')} />
        </View>

        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 70, marginLeft: '10%', marginRight: '10%' }}>
          <ImageBackground style={{ width: '100%', height: 50, justifyContent: 'center', marginBottom: 20 }} source={require('./../../assets/img/button.png')}>
            <TouchableWithoutFeedback onPress={() => handleClick('Penambahan')}>
              <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>PENAMBAHAN</Text>
            </TouchableWithoutFeedback>
          </ImageBackground>
          <ImageBackground style={{ width: '100%', height: 50, justifyContent: 'center', marginBottom: 20 }} source={require('./../../assets/img/button.png')}>
            <TouchableWithoutFeedback onPress={() => handleClick('Pengurangan')}>
              <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>PENGURANGAN</Text>
            </TouchableWithoutFeedback>
          </ImageBackground>
          <ImageBackground style={{ width: '100%', height: 50, justifyContent: 'center', marginBottom: 20 }} source={require('./../../assets/img/button.png')}>
            <TouchableWithoutFeedback onPress={() => handleClick('Perkalian')}>
              <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>PERKALIAN</Text>
            </TouchableWithoutFeedback>
          </ImageBackground>
          <ImageBackground style={{ width: '100%', height: 50, justifyContent: 'center', marginBottom: 20 }} source={require('./../../assets/img/button.png')}>
            <TouchableWithoutFeedback onPress={() => handleClick('Pembagian')}>
              <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>PEMBAGIAN</Text>
            </TouchableWithoutFeedback>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};


export default Home;
