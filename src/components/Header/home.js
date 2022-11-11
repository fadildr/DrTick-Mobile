import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function HomeHeader(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <Text>HMBRGR</Text>
      </TouchableOpacity>
      <View>
        <Text>MSG</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
