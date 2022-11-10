import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({});
