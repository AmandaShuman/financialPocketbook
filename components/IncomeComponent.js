import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Income extends Component {

  static navigationOptions = {
    title: 'Income'
  }

  render() {
    return (
      <View>
        <Text>Income Component</Text>
      </View>
    );
  }
}

export default Income;