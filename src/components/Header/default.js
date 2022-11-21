import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default function DefaultHeader(props) {
  const backScreen = () => {
    // props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backScreen} style={styles.section}>
        <Icon size={30} color="white" name="arrowleft" />
      </TouchableOpacity>
      <View style={(styles.section, styles.sectionCenter)}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: 20,
            fontWeight: '700',
          }}>
          {props.name}
        </Text>
      </View>
      <View style={styles.section} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3366FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  section: {
    flex: 1,
  },
  sectionCenter: {
    alignItems: 'center',
  },
});
