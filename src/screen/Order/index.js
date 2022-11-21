import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header/default';
import axios from '../../utils/axios';
export default function Order(props) {
  const [listBooking, setListBooking] = useState([]);
  const [count, setCount] = useState(0);
  // console.log(props.route.params.eventId);
  const id = props.route.params.eventId;
  console.log(id);
  useEffect(() => {
    getDataBooking();
  }, []);

  const getDataBooking = async () => {
    const DATADUMMY = await axios.get(`booking/event/${id}`);
    console.log(DATADUMMY.data.data);
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
          const filterSeat = DATADUMMY.data.filter(
            dataSeat => dataSeat.section === `${item.type}${i}-${j}`, // VVIP1-1 === VVIP1-1
          );
          // filterSeat = [{
          //   section: 'VVIP1-1',
          //   booked: 5,
          //   available: 5,
          //   statusFull: false,
          // }]
          const checkData = data.filter(
            dataAvailable => dataAvailable.type === item.type,
          ); // DIGUNAKAN UNTUK MENCARI TAU APAKAH TYPE SUDAH MASUK KE DALAM VARIABEL DATA ?
          // checkData = []
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
              });
            }
            if (filterSeat.length > 0 && !filterSeat[0]?.statusFull) {
              // JIKA DATA SUDAH MASUK KEDALAM DATA BOOKING
              data.push({
                type: filterSeat[0].section.includes('VVIP')
                  ? 'VVIP'
                  : item.type.includes('VIP')
                  ? 'VIP'
                  : 'REG',
                section: filterSeat[0].section,
                available: filterSeat[0].available,
              });
            }
          }
        }
      }
      return data;
    });
    // result = [[{type: "REG",section: "REG1-1", available: 30}], [{type: "VIP",section: "VIP1-1", available: 20}], [{type: "VVIP",section: "VVIP1-1", available: 5}]]
    const newResult = result.map(item => item[0]);
    // newResult = [
    //   {type: 'REG', section: 'REG1-1', available: 30},
    //   {type: 'VIP', section: 'VIP1-1', available: 20},
    //   {type: 'VVIP', section: 'VVIP1-1', available: 5},
    // ];
    setListBooking(newResult);
  };

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
      <View style={styles.img}>
        <Image source={require('../../assets/order.png')} />
      </View>
      <View style={styles.section}>
        <Text style={styles.textTicket}>Tickets</Text>
        <Text style={styles.priceText}>Price</Text>
      </View>
      <ScrollView>
        <View style={styles.ticket}>
          <Image
            source={require('../../assets/ticket1.png')}
            style={{width: 50, height: 50}}
          />
          <View style={{paddingLeft: 20}}>
            <View style={styles.detail}>
              <View>
                <Text style={styles.typeTicket}>Section reg, Row 1</Text>
                <Text style={styles.available}>12 Seats available</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>$15</Text>
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
                      textAlign: 'center',
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
        <View style={styles.ticket}>
          <Image
            source={require('../../assets/ticket1.png')}
            style={{width: 50, height: 50}}
          />
          <View style={{paddingLeft: 20}}>
            <View style={styles.detail}>
              <View>
                <Text style={styles.typeTicket}>Section reg, Row 1</Text>
                <Text style={styles.available}>12 Seats available</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>$15</Text>
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
                      textAlign: 'center',
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
        <View style={styles.ticket}>
          <Image
            source={require('../../assets/ticket1.png')}
            style={{width: 50, height: 50}}
          />
          <View style={{paddingLeft: 20}}>
            <View style={styles.detail}>
              <View>
                <Text style={styles.typeTicket}>Section reg, Row 1</Text>
                <Text style={styles.available}>12 Seats available</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>$15</Text>
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
                      textAlign: 'center',
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
      </ScrollView>
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
  },
});
