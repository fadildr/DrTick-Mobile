import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput, Checkbox} from 'react-native-paper';
import axios from '../../utils/axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Signup(props) {
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({});
  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };
  const handleSignup = async () => {
    try {
      console.log(form);
      const result = await axios.post('auth/register', form);
      // await AsyncStorage.setItem('userId', result.data.data.userId);
      // await AsyncStorage.setItem('token', result.data.data.token);
      // await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      alert(result.data.msg);
      props.navigation.navigate('Signin');
      // props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={styles.formAuth}>
        <Text style={styles.titleAuth}>Signup </Text>
        <Text>
          Already Have Account?{' '}
          <Text
            onPress={() => {
              props.navigation.navigate('Signin');
            }}
            style={{color: '#3366FF'}}>
            Signin Here
          </Text>
          {/* <br /> */}
        </Text>

        <TextInput
          label="Username"
          style={styles.inputAuth}
          onChangeText={text => handleChangeForm(text, 'username')}
        />
        <TextInput
          label="Email"
          style={styles.inputAuth}
          onChangeText={text => handleChangeForm(text, 'email')}
        />
        {/* <Icon color="red" size={30} name="" /> */}
        <TextInput
          style={styles.inputAuth}
          label="Password at least 8 character"
          secureTextEntry
          right={<TextInput.Icon icon="eye" color="blue" />}
          onChangeText={text => handleChangeForm(text, 'password')}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.label}>Accept terms and condition</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonSignin}
          onPress={handleSignup}
          disabled={
            !form.email ||
            !form.password ||
            !form.username ||
            form.password.length < 8 ||
            !checked
              ? true
              : false
          }>
          <Text style={{color: 'white', textAlign: 'center'}}>Register</Text>
        </TouchableOpacity>

        <View />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  inputAuth: {
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
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
    border: 1,
    borderColor: '#3366FF',
    borderStyle: 'solid',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
});
