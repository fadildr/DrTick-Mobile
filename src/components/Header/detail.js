import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function DetailHeader(props) {
  const backScreen = () => {
    // props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backScreen}>
        <Text>BACK</Text>
      </TouchableOpacity>
      <View>
        <Text>LOVE</Text>
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
