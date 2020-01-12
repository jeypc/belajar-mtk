import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
var Sound = require('react-native-sound');

const Pembagian = ({ navigation }) => {
  const [level, setLevel] = useState(1);
  let timesBy,
    timesByToAnswer
  if (level === 1) {
    timesBy = 5
    timesByToAnswer = 10
  }
  const [firstNumber, setFirstNumber] = useState(Math.floor(Math.random() * timesBy) + 1);
  const [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * timesBy) + 1);
  const [listOption, setListOption] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState()

  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleAnswer = (value) => {
    if (value === correctAnswer) {
      const correct = new Sound('correct.wav', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        correct.play();
      });
      setFirstNumber(Math.floor(Math.random() * timesBy) + 1)
      setSecondNumber(Math.floor(Math.random() * timesBy) + 1)
    } else {
      const wrong = new Sound('wrong.wav', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        wrong.play();
      });
      Alert.alert('Yaaaahh :(', 'Jawaban yang kamu pilih salah, jawaban yang benar adalah ' + correctAnswer)
    }
  }

  useEffect(() => {
    setCorrectAnswer(firstNumber + secondNumber)
    const listOptions = [firstNumber + secondNumber]
    while (listOptions.length < 3) {
      let number = Math.floor(Math.random() * timesByToAnswer) + 1;
      if (listOptions.indexOf(number) === -1) listOptions.push(number);
    }
    setListOption(shuffleArray(listOptions))
  }, [firstNumber, secondNumber])

  return (
    <ImageBackground resizeMode={'cover'} style={{ width: null, height: null, flex: 1 }} source={require('./../../assets/img/page-bg.jpg')}>
      <SafeAreaView>
        <View style={{ alignContent: 'center', marginTop: 20, alignItems: 'center' }}>
          <Image source={require('./../../assets/img/penambahan.png')} />
        </View>
        <View style={{ marginTop: 60, alignItems: 'center', alignContent: 'center' }}>
          <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#4caf50' }}>{firstNumber} + {secondNumber}</Text>

          <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#4caf50', marginTop: 30, marginBottom: 30 }}>=</Text>

          <View style={{
            flexDirection: 'row',
            marginTop: 0,
            flexWrap: 'wrap',
          }}>
            {listOption.map((option, index) => (
              <TouchableOpacity onPress={() => handleAnswer(option)} key={index} style={{ padding: 20 }}>
                <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#2196f3' }}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </SafeAreaView>
      <View style={{ padding: 20, justifyContent: 'flex-end', position: 'absolute', bottom: 10, width: '100%' }}>
        <ImageBackground style={{ width: '100%', height: 50, justifyContent: 'center', marginBottom: 20 }} source={require('./../../assets/img/button.png')}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>MENU AWAL</Text>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};


export default Pembagian;
