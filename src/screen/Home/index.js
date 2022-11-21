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
// import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';
export default function Home(props) {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  // const [dateShow, setDateShow] = useState(moment().format('YYYY,MM,DD'));
  // const [listDateShow, setListDateShow] = useState([]);
  const [searchName, setSearchName] = useState('');
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
    // generateDate();
  }, [searchName]);
  const navDetail = id => props.navigation.navigate('Detail', {eventId: id});
  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };
  const getData = async () => {
    try {
      const result = await axios.get(
        `event?page=1&limit=5&name=${searchName}&dateTimeShow=`,
      );
      setData(result.data.data);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const handleSearch = () => {
    setSearchName(form.keyword);
  };
  // const generateDate = () => {
  //   let listDate = [
  //     moment(dateShow).subtract(2, 'days'),
  //     moment(dateShow).subtract(1, 'days'),
  //     dateShow,
  //     moment(dateShow).subtract(-1, 'days'),
  //     moment(dateShow).subtract(-2, 'days'),
  //   ];
  //   setListDateShow(listDate);
  // };
  // const selectDate = date => {
  //   setDateShow(date);
  // };
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
        {/* {listDateShow.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{margin: '0 10px'}}
            className={index === 2 ? 'active' : ''}
            // className="btn-date"
            onPress={() => {
              selectDate(moment(item).format('YYYY,MM,DD'));
            }}>
            <Text>{moment(item).format('DD')}</Text>
            <Text>{moment(item).format('ddd')}</Text>
          </TouchableOpacity>
        ))} */}
      </View>
      <ScrollView style={styles.containerCard}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '700',
            color: 'black',
            marginLeft: 30,
            marginTop: 48,
          }}>
          Event For You
        </Text>
        {data.length > 0 ? (
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles.cardEvent}
                onPress={() => navDetail(item.eventId)}>
                <Image
                  source={{
                    uri: `https://res.cloudinary.com/dxbhfz3jn/image/upload/v1664877618/${item.image}`,
                  }}
                  style={{width: '100%', height: '100%', borderRadius: 30}}
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
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            Data Not Found
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#3366FF', padding: 0},
  search: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 'auto',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  cardEvent: {
    width: 300,
    backgroundColor: 'blue',
    height: 400,
    marginHorizontal: 40,
    marginVertical: 100,
    position: 'relative',
    borderRadius: 30,
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
    // alignItems: 'center',
    marginTop: 20,
  },
  containerCard: {
    position: 'absolute',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 200,
    width: '100%',
    height: '100%',
    // backgroundColor: 'white',
  },
  card: {
    marginRight: 20,
    width: 400,
    height: 600,
    borderRadius: 20,
  },
  descCard: {zIndex: 3, position: 'absolute', marginTop: 300, marginLeft: 20},
  dateCard: {
    fontSize: 14,
    color: 'white',
  },
  titleCard: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  dateContainer: {alignItems: 'center'},
  date: {color: 'white'},
  buttonDetail: {
    marginTop: 300,
  },
});
