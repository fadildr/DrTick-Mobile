import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Signin(props) {
  const handleSignup = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };
  return (
    <View>
      <Text>Signin Screen</Text>
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
}

const style = StyleSheet.create({});
