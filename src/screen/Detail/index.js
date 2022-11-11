import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderDetail from '../../components/Header/detail';

export default function Detail(props) {
  return (
    <View>
      <HeaderDetail {...props} />
      <Text>Detail Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({});
