import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function SplashScreen(props) {
  console.log(props);
  const token = false;
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    setTimeout(() => {
      if (token) {
        props.navigation.replace('AppScreen');
      } else {
        props.navigation.replace('AuthScreen');
      }
    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3366FF',
      }}>
      <Image
        source={require('../../assets/doll.png')}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
}
// AppRegistry.registerComponent('checkToken', () => SplashScreen);
const style = StyleSheet.create({});
