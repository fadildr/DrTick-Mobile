import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import axios from '../../utils/axios';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import {useDispatch} from 'react-redux';
import {getDataUser} from '../../stores/action/user';
export default function Profile(props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const userId = user.data.userId;

  const [checked, setChecked] = useState(user.data.gender);
  const [form, setForm] = useState({
    name: user.data.name,
    email: user.data.email,
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(user.data.profession);
  const [items, setItems] = useState([
    {label: 'Programmer', value: 'programmer'},
    {label: 'Football Player', value: 'football player'},
    {label: 'Singer', value: 'singer'},
    {label: 'Entrepeneur', value: 'entrepeneur'},
  ]);
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const dateOfBirth = date;
  // console.log(dateOfBirth);
  const alldata = {
    ...form,
    gender: checked,
    dateOfBirth,
    profession: value,
  };
  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };
  const handleUpdateProfile = async () => {
    // console.log(form);
    console.log(alldata);
    try {
      const result = await axios.patch(`user/${userId}`, alldata);
      alert(result.data.msg);
      await dispatch(getDataUser(userId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
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
      <View style={{marginTop: 100, width: '100%'}} />
      <Text style={{marginRight: 350, marginBottom: 15}}>Name</Text>
      <TextInput
        placeholder="Name"
        onChangeText={text => handleChangeForm(text, 'name')}
        style={styles.input}
        value={user.data.name}
      />
      <Text style={{marginRight: 350, marginBottom: 15}}>Email</Text>
      <TextInput
        placeholder="Email"
        onChangeText={text => handleChangeForm(text, 'email')}
        style={styles.input}
        value={user.data.email}
      />

      <View
        style={{
          flexDirection: 'row',

          width: 250,
          justifyContent: 'space-around',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="male"
            status={checked === 'male' ? 'checked' : 'unchecked'}
            // status="checked"
            onPress={() => setChecked('male')}
          />
          <Text>Male</Text>
        </View>
        <View style={{marginBottom: 40}}>
          <Text>Gender</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="female"
            status={checked === 'female' ? 'checked' : 'unchecked'}
            // status="checked"
            onPress={() => setChecked('female')}
          />
          <Text>Female</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{width: 400, marginBottom: 40}}
        />
      </View>
      {/* <Button title="Open" onPress={() => setOpenDate(true)} /> */}
      <View
        style={{
          flexDirection: 'row',

          width: 200,
          justifyContent: 'space-between',
        }}>
        <Text>12-231231 </Text>
        <TouchableOpacity onPress={() => setOpenDate(true)}>
          <Icon
            size={20}
            name="calendar"
            color="grey"
            // style={{marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        mode="date"
        open={openDate}
        date={date}
        onConfirm={date => {
          setOpenDate(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
      />
      <TouchableOpacity
        onPress={handleUpdateProfile}
        style={{
          backgroundColor: '#3366FF',
          width: 400,
          height: 50,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
          Save
        </Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#373A42',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    width: 400,
    height: 40,
    borderRadius: 15,
    marginBottom: 15,
  },
});
