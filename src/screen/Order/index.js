import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Header from '../../components/Header/default';

import axios from '../../utils/axios';
export default function Order(props) {
  const [listBooking, setListBooking] = useState([]);

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState('');
  const [dataEvent, setDataEvent] = useState([]);

  // console.log(props.route.params.eventId);
  const id = props.route.params.eventId;
  // console.log(id);
  useEffect(() => {
    getDataEvent();
    getDataBooking();
  }, []);
  const getDataEvent = async () => {
    try {
      const result = await axios.get(`event/${id}`);
      // console.log(result.data.data.price);
      setPrice(dataEvent[0]?.price);
      setDataEvent(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(price);
  // console.log(dataEvent[0].price);
  const getDataBooking = async () => {
    const dataBooking = await axios.get(`booking/event/${id}`);

    const seat = [
      {
        type: 'VVIP',
        section: 1,
      },
      {type: 'VIP', section: 7},
      {type: 'REG', section: 9},
    ];
    const result = seat.map(item => {
      let data = []; // VVIP, VIP, REG
      for (let i = 1; i <= 4; i++) {
        // DIGUNAKAN UNTUK MENCARI DATA TIAP BAGIAN
        for (let j = 1; j <= item.section; j++) {
          // DIGUNAKAN UNTUK MENCARI DATA TIAP SECTION
          const filterSeat = dataBooking.data.data.filter(
            dataSeat => dataSeat.section === `${item.type}${i}-${j}`, // VVIP1-1 === VVIP1-1
          );

          const checkData = data.filter(
            dataAvailable => dataAvailable.type === item.type,
          ); // DIGUNAKAN UNTUK MENCARI TAU APAKAH TYPE SUDAH MASUK KE DALAM VARIABEL DATA ?

          if (checkData.length < 1) {
            // pengecekan data
            if (filterSeat.length < 1) {
              // JIKA DATA BELUM MASUK KEDALAM DATA BOOKING

              data.push({
                type: item.type,
                section: `${item.type}${i}-${j}`,
                available: item.type.includes('VVIP')
                  ? 10
                  : item.type.includes('VIP')
                  ? 20
                  : 30,
                price: dataEvent[0]?.price,
              });
            }
            if (filterSeat.length > 0 && !filterSeat[0]?.statusFull) {
              // JIKA DATA SUDAH MASUK KEDALAM DATA BOOKING
              // console.log(filterSeat[0].available);
              data.push({
                type: filterSeat[0].section.includes('VVIP')
                  ? 'VVIP'
                  : item.type.includes('VIP')
                  ? 'VIP'
                  : 'REG',
                section: filterSeat[0].section,
                available: filterSeat[0].available,
                price: filterSeat[0].section.includes('VVIP')
                  ? dataEvent[0]?.price * 3
                  : item.type.includes('VIP')
                  ? dataEvent[0]?.price * 2
                  : dataEvent[0]?.price,
              });
            }
          }
          // const
        }
      }
      return data;
    });
    // result = [[{type: "REG",section: "REG1-1", available: 30}], [{type: "VIP",section: "VIP1-1", available: 20}], [{type: "VVIP",section: "VVIP1-1", available: 5}]]
    const newResult = result.map(item => item[0]);
    setListBooking(newResult);
  };
  // const countPrice = () => {

  // };
  console.log(listBooking);
  const decrement = () => {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  };
  const increment = () => {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Header {...props} />
      <View style={{width: 800}} />
      <View style={styles.img}>
        <Image source={require('../../assets/order.png')} />
      </View>
      <View style={styles.section}>
        <Text style={styles.textTicket}>Tickets</Text>
        <Text style={styles.priceText}>Price</Text>
      </View>
      <ScrollView>
        <FlatList
          // horizontal={true}
          data={listBooking}
          renderItem={({item, index}) => (
            <View style={styles.ticket}>
              <Image
                source={
                  item.type === 'VVIP'
                    ? require('../../assets/ticket3.png')
                    : item.type === 'VIP'
                    ? require('../../assets/ticket2.png')
                    : require('../../assets/ticket1.png')
                }
                style={{width: 50, height: 50}}
              />
              <View style={{paddingLeft: 20}}>
                <View style={styles.detail}>
                  <View>
                    <Text style={styles.typeTicket}>
                      Section {item.type}, {item.section}
                    </Text>
                    <Text style={styles.available}>
                      {item.available} Seats available
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text>{item.price}</Text>
                    <Text>/person</Text>
                  </View>
                </View>
                <View style={styles.sectionBottom}>
                  <Text style={{color: '#373A42', fontSize: 14}}>Quantity</Text>
                  <View style={styles.indec}>
                    <TouchableOpacity style={styles.button} onPress={decrement}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontWeight: 'bold',
                          color: '#C1C5D0',
                          fontSize: 20,
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text style={{color: 'black'}}>{count}</Text>
                    <TouchableOpacity style={styles.button} onPress={increment}>
                      <Text
                        style={{
                          // marginBottom: 5,

                          fontWeight: 'bold',
                          fontSize: 20,
                          color: '#C1C5D0',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkout}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: 100,
  },

  textTicket: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  priceText: {
    color: '#FC1055',
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  available: {color: '#BDC0C4', fontSize: 14},
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  ticket: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 6,

    // marginRight: 60,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 440,
    marginRight: 60,

    paddingRight: 30,

    alignItems: 'center',
    marginBottom: 5,
  },
  typeTicket: {
    color: '#373A42',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
  },
  sectionBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 440,
    marginRight: 30,

    paddingRight: 30,
  },
  indec: {
    flexDirection: 'row',
    alignItems: 'center',

    width: 80,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    borderColor: '#C1C5D0',
    borderStyle: 'solid',
    width: 25,
    height: 25,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    // paddingBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 50,
    borderRadius: 10,
    padding: 5,
  },
  checkout: {
    backgroundColor: '#3366FF',
    width: '100%',
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
