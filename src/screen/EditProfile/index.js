import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default function EditProfile(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Image
        source={require('../../assets/google.png')}
        // source={require(`https://res.cloudinary.com/dxbhfz3jn/image/upload/v1664877618/${item.image}`)}
        style={{width: 180, height: 180, marginVertical: 30}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
