import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
// import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import HeaderDetail from '../../components/Header/detail';
export default function Home(props) {
  const handleBuy = () => props.navigation.navigate('Order');
  return (
    <View>
      <HeaderDetail {...props} />
      <View style={styles.detailImage}>
        <Image
          source={require('../../assets/Bitmap.png')}
          style={{width: '100%', height: 600}}
        />

        <View style={styles.descCard}>
          <Text style={styles.titleCard}>Sights & Sounds Exhibition</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              size={20}
              color="red"
              name="pushpino"
              style={{marginRight: 10}}
            />
            <Text style={styles.dateCard}>Jakarta, Indonesia</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Icon
              size={20}
              color="red"
              name="clockcircleo"
              style={{marginRight: 10}}
            />
            <Text style={styles.dateCard}>Wed, 15 Nov, 4:00 PM</Text>
          </View>
          <Text style={{marginVertical: 20}}>Attandees</Text>
          <Image
            source={require('../../assets/attandees.png')}
            style={{width: 90, height: 30}}
          />
        </View>
      </View>
      {/* <View> */}
      <ScrollView style={styles.sortDateContainer}>
        <View style={{marginVertical: 15}}>
          <Text style={{fontWeight: '600', fontSize: 24}}>Event Detail</Text>
          <Text style={{fontWeight: '400', fontSize: 16}}>
            After his controversial art exhibition "Tear and Consume" back in
            November 2018, in which guests were invited to tear up…
          </Text>
        </View>
        <Image
          source={require('../../assets/map.png')}
          style={{width: 600, height: 300, marginBottom: 320, borderRadius: 15}}
        />
      </ScrollView>
      <TouchableOpacity style={styles.buttonDetail} onPress={handleBuy}>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 10,
            fontSize: 15,
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
  },
  titleCard: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
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
