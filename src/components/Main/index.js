import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { storeAction } from '../../actions/storeAction';
import Card from '../Card';


const App = (props) =>  {
  useEffect(() => {
    props.storeAction();
  }, [])
  const dataList = props.storeList?.data?.listRestaurants;
  !isEmpty(dataList) && dataList.map(el => {
    console.log(el.outlet.length)
  })
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.container}>
        <View style={styles.topBar}>
          {!isEmpty(dataList) && <Text style={styles.text}>{`${dataList.length} RESTAURENTS`}</Text>}
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>RELEVANCE</Text>
            <Image source={require('../../assets/images/arrow.png')} resizeMode='contain' style={{width: 15, height: 8}} />
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.text}>FILTER</Text>
            <Image source={require('../../assets/images/filter.png')} resizeMode='contain' style={{width: 16, height: 14}} />
          </TouchableOpacity>
        </View>
        {!isEmpty(dataList) && <FlatList
          data={dataList}
          renderItem={({item}) => <Card 
            img={item.restaurantImage} 
            name={item.restaurantName}
            time={item.displayTime}
            cost={item.displayCostForTwo}
            outlet={item.outlet} />}
        />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  topBar: {
    borderBottomWidth: 1,
    borderBottomColor: '#B8B8B6',
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginBottom: 35
  },
  text: {
    fontFamily: "AktivGroteskCorp-Bold", 
    fontSize: 12,
    lineHeight: 19,
    color: '#B8B8B6',
    paddingRight: 5
  }
});

function mapStateToProps(state) {
    return {
      storeList: state.stores,
    }
}

export default connect(mapStateToProps, { storeAction })(App);