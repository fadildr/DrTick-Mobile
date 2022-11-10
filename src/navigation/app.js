import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import Detail from '../screen/Detail';

import Profile from '../screen/Profile';

function MenuNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA AKAN MASUK KE DALAM DRAWER DISINI
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      {/* MY BOOKING */}
      {/* MY WISHLIST */}
    </Drawer.Navigator>
  );
}

export default function AppStackNavigator() {
  return (
    // DAFTARKAN MENU YANG NANTINYA DAPAT DI AKSES DILUAR DRAWER DISINI
    <Stack.Navigator initialRouteName="MenuNavigator">
      {/* HOME SCREEN */}
      <Stack.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={Detail} />
      {/* ORDER */}
      {/* PAYMENT */}
      {/* EDIT PROFILE */}
      {/* CHANGE PASSWORD */}
    </Stack.Navigator>
  );
}
