import React, {useState} from 'react';
import {
  View,
  Text,
  // Button,
  StyleSheet,
  TouchableOpacity,
  // Linking,
  Image,
} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
// import {Input} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
export default function Signin(props) {
  const [text, setText] = useState('');
  const handleLogin = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.formAuth}>
        <Text style={styles.titleAuth}>Signin </Text>
        <Text style={styles.descAuth}>Hi, Welcome back to Urticket! </Text>

        <TextInput label="Username" style={styles.inputAuth} />
        <TextInput label="Email" style={styles.inputAuth} />
        {/* <Icon color="red" size={30} name="" /> */}
        <TextInput
          style={styles.inputAuth}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" color="blue" />}
        />
        <Text style={{color: '#3366FF', textAlign: 'right'}}>
          Forgot Password?
        </Text>

        {/* <Text style={styles.descAuth}>Hi, Welcome back to Urticket! </Text> */}

        <TouchableOpacity style={styles.buttonSignin} onPress={handleLogin}>
          <Text style={{color: 'white', textAlign: 'center'}}>Login</Text>
        </TouchableOpacity>
        <Text>
          Dont Have Account?{' '}
          <Text
            onPress={() => {
              props.navigation.navigate('Signup');
            }}
            style={{color: '#3366FF'}}>
            Signup Here
          </Text>
          {/* <br /> */}
        </Text>

        <Text style={styles.titleFooterAuth}>or sign in with</Text>
        <View style={styles.footerAuth}>
          <View style={styles.buttonFooterAuth}>
            <Image source={require('../../assets/google.png')} />
          </View>
          <View style={styles.buttonFooterAuth}>
            <Image source={require('../../assets/fb.png')} />
          </View>
        </View>
        <View />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleAuth: {
    fontfamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: 1,
    color: '#373A42',
    marginBottom: 15,
    // fontWeight: 20,
  },
  descAuth: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: '#373A42',
  },
  inputAuth: {
    marginVertical: 10,
  },
  formAuth: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  buttonSignin: {
    padding: 10,

    borderRadius: 15,
    marginVertical: 30,
    backgroundColor: '#3366FF',
    // boxShadow: 0 8 10 rgba(35, 149, 255, 0.3),
  },
  titleFooterAuth: {
    marginTop: 20,
    textAlign: 'center',
  },
  footerAuth: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonFooterAuth: {
    borderWidth: 1,
    borderColor: '#3366FF',
    borderStyle: 'solid',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
});
