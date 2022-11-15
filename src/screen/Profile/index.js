import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default function Profile(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Image
        source={require('../../assets/google.png')}
        // source={require(`https://res.cloudinary.com/dxbhfz3jn/image/upload/v1664877618/${item.image}`)}
        style={{width: 180, height: 180, marginVertical: 30}}
      />
      <Text style={{color: '#373A42', fontSize: 24, fontWeight: '600'}}>
        Jhon
      </Text>
      <Text>entrepener</Text>
      <View style={{marginTop: 100, width: '100%'}}>
        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              size={20}
              name="edit"
              color="grey"
              style={{marginRight: 10}}
            />
            <Text style={styles.title}>Edit Profile</Text>
          </View>
          <Icon
            size={30}
            name="arrowright"
            color="grey"
            // style={{marginTop: 5}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('ChangePassword');
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              size={20}
              name="unlock"
              color="grey"
              style={{marginRight: 10}}
            />
            <Text style={styles.title}>Change Password</Text>
          </View>
          <Icon
            size={30}
            name="arrowright"
            color="grey"
            // style={{marginTop: 5}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    // backgroundColor: 'red',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#373A42',
  },
});
