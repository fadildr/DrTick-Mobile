import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Header from '../../components/Header/default';
export default function Order(props) {
  return (
    <View>
      <Header {...props} />
      <Image
        source={require('../../assets/order.png')}
        style={{
          width: '100%',
          height: 400,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
          }}>
          <Text>dete</Text>
          <Text>SORT1</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({});
