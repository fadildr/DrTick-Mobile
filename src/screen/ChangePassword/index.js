import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../../components/Header/default';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';
// import {set} from 'react-native-reanimated';
export default function ChangePassword(props) {
  const [form, setForm] = useState({});
  const [userId, setUserId] = useState('');
  useEffect(() => {
    // checkStorage();
    getUserId();
  }, []);
  const getUserId = async () => {
    const data = await AsyncStorage.getItem('userId');
    setUserId(data);
  };

  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };
  const handleChangePass = async () => {
    try {
      const result = await axios.patch(`user/updatePassword/${userId}`, form);
      alert(result.data.msg);
      setForm('');
    } catch (error) {
      setForm('');
      alert(error.response.data.msg);
    }
  };
  return (
    <View>
      <Header {...props} />
      <View style={{paddingHorizontal: 20, paddingTop: 30}}>
        <View>
          <TextInput
            placeholder="Old Password"
            secureTextEntry
            onChangeText={text => handleChangeForm(text, 'password')}
            style={styles.input}
          />
          <Text>At Least 8 Character</Text>
        </View>
        <View>
          <TextInput
            placeholder="New Password"
            secureTextEntry
            onChangeText={text => handleChangeForm(text, 'newPassword')}
            style={styles.input}
          />
          <Text>At Least 8 Character</Text>
        </View>
        <View>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={text => handleChangeForm(text, 'confirmPassword')}
            style={styles.input}
          />
          <Text>At Least 8 Character</Text>
        </View>
        <TouchableOpacity onPress={handleChangePass} style={styles.button}>
          <Text style={{color: 'white', fontSize: 20}}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 5,
    marginTop: 10,
  },
  button: {
    marginTop: 30,
    justifyContent: 'center',
    // width: '100%',
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: '#3366FF',
    alignItems: 'center',

    marginHorizontal: 5,
    borderRadius: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#373A42',
  },
});
