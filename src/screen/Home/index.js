import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import axios from '../../utils/axios';
// import checkStorage from '../../utils/checkAsyncStorage';
// import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
export default function Home(props) {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  useEffect(() => {
    // checkStorage();
    // getUserId();
    getData();
  }, []);
  useEffect(() => {
    // console.log("searc is update");
    getData();
  }, [searchName]);
  const navDetail = id => props.navigation.navigate('Detail', {eventId: id});
  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };
  const getData = async () => {
    try {
      const result = await axios.get(
        `event?page=1&limit=&name=${searchName}&dateTimeShow=`,
      );
      setData(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleSearch = () => {
    console.log(form.keyword);
    setSearchName(form.keyword);
    // alert('kwajd');
  };
  // console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Icon
          size={30}
          name="search1"
          style={{marginTop: 5}}
          onPress={handleSearch}
        />
        <TextInput
          placeholder="Search..."
          onChangeText={text => handleChangeForm(text, 'keyword')}
        />
      </View>
      {/* <View> */}
      <View style={styles.sortDateContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>13</Text>
          <Text style={styles.date}>Mon</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>14</Text>
          <Text style={styles.date}>Tue</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>15</Text>
          <Text style={styles.date}>Tue</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>16</Text>
          <Text style={styles.date}>Tue</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>17</Text>
          <Text style={styles.date}>Tue</Text>
        </View>
      </View>
      <ScrollView style={styles.containerCard}>
        {data.length > 0 ? (
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.cardEvent}
                onPress={() => navDetail(item.eventId)}>
                <Image
                  source={require('../../assets/doll.png')}
                  // source={require(`https://res.cloudinary.com/dxbhfz3jn/image/upload/v1664877618/${item.image}`)}
                  style={{width: '100%', height: '100%'}}
                />
                <View style={styles.descCard}>
                  <Text style={styles.dateCard}>
                    {item.dateTimeShow.split('T')[0]}
                  </Text>
                  <Text style={styles.titleCard}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text>Data Not Found</Text>
        )}
      </ScrollView>
      {/* <ScrollView horizontal={true} style={styles.containerCard}>
        <TouchableOpacity style={styles.cardEvent} onPress={navDetail}>
          <Image
            source={require('../../assets/doll.png')}
            style={{width: '100%', height: '100%'}}
          />
          <View style={styles.descCard}>
            <Text style={styles.dateCard}>Wed, 15 Nov, 4:00 PM</Text>
            <Text style={styles.titleCard}>Sights & Sounds Exhibition</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardEvent} onPress={navDetail}>
          <Image
            source={require('../../assets/doll.png')}
            style={{width: '100%', height: '100%'}}
          />
          <View style={styles.descCard}>
            <Text style={styles.dateCard}>Wed, 15 Nov, 4:00 PM</Text>
            <Text style={styles.titleCard}>Sights & Sounds Exhibition</Text>
          </View>
        </TouchableOpacity>
      </ScrollView> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#3366FF'},
  search: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 'auto',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  cardEvent: {
    width: 400,
    backgroundColor: 'blue',
    height: 600,
    marginLeft: 20,
    position: 'relative',
    borderRadius: 20,
    marginTop: 100,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sortDateContainer: {
    backgroundColor: '#222B45',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    // alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 200,
    position: 'relative',
  },
  containerCard: {
    position: 'absolute',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 200,
  },
  card: {
    marginRight: 20,
    width: 400,
    height: 600,
    borderRadius: 20,
  },
  descCard: {zIndex: 3, position: 'absolute', marginTop: 500, marginLeft: 20},
  dateCard: {
    fontSize: 14,
  },
  titleCard: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  dateContainer: {alignItems: 'center'},
  date: {color: 'white'},
  buttonDetail: {
    marginTop: 300,
  },
});
