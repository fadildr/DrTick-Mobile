import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default function DetailHeader(props) {
  // const wishlist = true;
  const backScreen = () => {
    // props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backScreen}>
        <Icon size={30} color="white" name="arrowleft" />
      </TouchableOpacity>
      <TouchableOpacity>
        {/* <TouchableOpacity onPress={backScreen}>
          {wishlist ? (
            <Icon size={30} color="white" name="hearto" />
          ) : (
            <Icon size={30} color="white" name="heart" />
          )}
          )}
        </TouchableOpacity> */}
        <Icon size={30} color="white" name="hearto" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'transparent',
  },
});
