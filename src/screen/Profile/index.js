import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
export default function Profile(props) {
  const user = useSelector(state => state.user);
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <View style={styles.avatar}>
        {user.data.image ? (
          <Image
            style={styles.image}
            source={{
              uri: `https://res.cloudinary.com/dxbhfz3jn/image/upload/v1664877618/${user.data.image}`,
            }}
            // style={{width: '100%', height: '100%', borderRadius: 20}}
          />
        ) : (
          <Icon
            size={50}
            color="white"
            name="user"
            style={{marginTop: 20, textAlign: 'center'}}
          />
        )}
      </View>
      <Text style={{color: '#373A42', fontSize: 24, fontWeight: '600'}}>
        {user.data.name ? user.data.name : 'anonymous'}
      </Text>
      <Text>{user.data.profession ? user.data.profession : 'anonymous'}</Text>
      <View style={{marginTop: 100, width: '100%'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate('EditProfile');
          }}>
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#373A42',
  },
});
