import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

function DrawerContent(props) {
  const user = useSelector(state => state.user);

  const handleLogout = async () => {
    try {
      alert('Logout');
      await AsyncStorage.clear();
      props.navigation.replace('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <View style={styles.avatar}>
            {user.data.image ? (
              <Image
                source={{
                  uri: `https://res.cloudinary.com/dxbhfz3jn/image/upload/v1664877618/${user.data.image}`,
                }}
                // style={{width: '100%', height: '100%', borderRadius: 20}}
              />
            ) : (
              <Icon
                size={30}
                color="white"
                name="user"
                style={{marginTop: 5, textAlign: 'center'}}
              />
            )}
          </View>
          <View style={styles.biodata}>
            <Text style={styles.title}>
              {' '}
              {user.data.name ? user.data.name : 'anonymous'}
            </Text>
            <Text style={styles.caption}>
              {user.data.username ? user.data.username : 'anonymous'}
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
    color: 'black',
  },
  caption: {
    fontSize: 14,
    color: 'black',
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
