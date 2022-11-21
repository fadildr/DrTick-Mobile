import axios from '../../utils/axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
// import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import HeaderDetail from '../../components/Header/detail';
export default function Home(props) {
  const [data, setData] = useState({});
  const handleBuy = () =>
    props.navigation.navigate('Order', {eventId: props.route.params.eventId});
  useEffect(() => {
    getEventById();
  }, []);
  // const id = ;
  const getEventById = async () => {
    try {
      const result = await axios.get(`event/${props.route.params.eventId}`);
      setData(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <View>
      <HeaderDetail {...props} />
      {/* {detail.map((item) =>(

      ) */}
      <View style={styles.detailImage}>
        <Image
          source={{
            uri: `https://res.cloudinary.com/dxbhfz3jn/image/upload/v1664877618/${data.image}`,
          }}
          style={{width: '100%', height: 600}}
        />
      </View>
      {/* <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
          marginTop: 0,
        }}> */}
      <View style={styles.descCard}>
        <Text style={styles.titleCard}>{data.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon
            size={20}
            color="red"
            name="pushpino"
            style={{marginRight: 10}}
          />
          <Text style={styles.dateCard}>{data.location}</Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Icon
            size={20}
            color="red"
            name="clockcircleo"
            style={{marginRight: 10}}
          />
          <Text style={styles.dateCard}>
            {data.dateTimeShow?.split('T')[0]},
            {data.dateTimeShow?.split('T')[1]}
          </Text>
        </View>
        <Text style={{marginVertical: 20, color: 'white'}}>Attandees</Text>
        <Image
          source={require('../../assets/attandees.png')}
          style={{width: 90, height: 30}}
        />
      </View>
      {/* </View> */}
      {/* <View> */}
      <ScrollView style={styles.sortDateContainer}>
        <View style={{marginVertical: 15}}>
          <Text style={{fontWeight: '600', fontSize: 24, color: 'white'}}>
            Event Detail
          </Text>
          <Text style={{fontWeight: '400', fontSize: 16, color: 'white'}}>
            {data.detail}
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/map.png')}
            style={{
              width: 400,
              height: 300,
              marginBottom: 320,
              borderRadius: 15,
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonDetail} onPress={handleBuy}>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 10,
            fontSize: 15,
            color: 'white',
          }}>
          Buy Tickets
        </Text>
      </TouchableOpacity>

      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#3366FF'},
  detailImage: {position: 'relative'},
  sortDateContainer: {
    backgroundColor: '#222B45',
    width: '100%',

    padding: 20,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 600,
    position: 'absolute',
    marginTop: 600,
  },
  containerCard: {
    position: 'absolute',
    backgroundColor: 'red',
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
  descCard: {zIndex: 3, position: 'absolute', marginTop: 100, marginLeft: 20},
  dateCard: {
    fontSize: 14,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    color: 'white',
  },
  titleCard: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  dateContainer: {alignItems: 'center'},
  date: {color: 'white'},
  buttonDetail: {
    marginTop: 250,
    backgroundColor: '#3366FF',
    marginHorizontal: 20,
    height: 40,
    borderRadius: 15,
  },
});
