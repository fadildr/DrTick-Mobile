import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Signin(props) {
  const handleLogin = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };
  const navSignup = () => {
    props.navigation.navigate('Signup');
  };
  return (
    <View>
      <Icon color="red" size={30} name="downcircleo" />
      <Text style={{fontFamily: 'KolkerBrush', fontSize: 50}}>
        Signin Screen
      </Text>
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
