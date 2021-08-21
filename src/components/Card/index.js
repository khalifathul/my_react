import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const maxlimit = 26;
const Card = (props) =>  {
  const { img, name, time, cost, outlet } = props;

  return (
    <TouchableOpacity>
       <View style={styles.card}>
        <View>
          <Image
            style={styles.img}
            source={{uri: img}}
          />
        </View>
        <View style={{width: "100%", flex: 1}}>
          <Text numberOfLines={ 1 } style={styles.cardTitle}>{((name).length > maxlimit) ? 
      (((name).substring(0,maxlimit-3)) + '...') : 
      name}</Text>
          <Text style={styles.cardDesc}>North Indian, South Indian, …</Text>
          
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.span}>Time</Text>
                <Text style={styles.spanText}>{time}</Text>
              </View>
              <View>
                <Text style={styles.span}>Price</Text>
                <Text style={styles.spanText}>{cost}</Text>
              </View>
              <View>
                <Text style={styles.span}>Rating</Text>
                <View style={styles.rating}>
                  <Image source={require('../../assets/images/star.png')} resizeMode='contain' style={styles.star} />
                  <Text style={styles.ratingText}>4.5</Text>
                </View>
              </View>
            </View>
        </View>
      </View>
      {outlet.length > 1 && <Text style={{color: "#B8B8B6", fontSize: 14, textAlign: 'center', paddingBottom: 20}}>{outlet.length} outlets available</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 110,
    height: 110,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginRight: 18,
  },
  card: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 20
  },
  cardTitle: {
    fontFamily: 'AktivGroteskCorp-Medium',
    fontSize: 16,
    color: "#1C2B44",
    lineHeight: 22,
    paddingBottom: 9,
    paddingRight: 25
  },
  cardDesc: {
    fontFamily: 'AktivGroteskCorp-Medium',
    fontSize: 12,
    color: "#B8B8B6",
    lineHeight: 18,
    paddingBottom: 14
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  span: {
    fontFamily: 'AktivGroteskCorp-Regular',
    fontSize: 10,
    color: '#B8B8B6',
    lineHeight: 10,
    letterSpacing: 0.22,
    paddingBottom: 6
  },
  spanText: {
    color: "#1C2B44",
    fontFamily: "AktivGroteskCorp-Medium",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.24
  },
  rating: {
    backgroundColor: '#5AE595',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    paddingHorizontal: 5,
    height:16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  star: {
    width: 10,
    height:10,
    marginRight: 6
  },
  ratingText: {
    color: "#fff",
    fontFamily: "AktivGroteskCorp-Medium",
    fontWeight: "bold",
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.22,
  }
});

export default Card;