import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default function Signin(props) {
  const handleLogin = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };
  const navSignup = () => {
    props.navigation.navigate('Signup');
  };
  return (
    <View>
      <Text>Signin Screen</Text>
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity style={styles.buttonSignup} onPress={navSignup}>
        <Text style={{color: 'white'}}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSignup: {
    padding: 10,
    backgroundColor: 'blue',
  },
});
