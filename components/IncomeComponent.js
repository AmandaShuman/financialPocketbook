import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { INCOME } from '../shared/income';

const Summary = () => {
  return (
    <Card>
      <Text style={{ margin: 10 }}>
        The first step to getting your finances in order is to figure out how much money you have to work with. Take some time to enter in the money you are receiving.
      </Text>
    </Card>
  );
}

class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income: INCOME
    }
  }

  static navigationOptions = {
    title: 'Income'
  }

  render() {
    return (
      <ScrollView>
        <Summary />
      </ScrollView>
    );
  }
}

export default Income;