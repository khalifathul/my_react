import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Main from './src/components/Main';

const viewContainer = {
    flex: 1,
};

class App extends Component {
  render() {
    return (
      <View style={viewContainer}>
        <Provider store={store}><Main /></Provider>
      </View>
    );
  }
}

export default App;