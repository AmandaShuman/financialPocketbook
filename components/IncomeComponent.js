import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
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

    const { navigate } = this.props.navigation;
    const renderIncomeItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
        />
      )
    };

    return (
      <ScrollView>
        <Summary />
        <FlatList
          data={this.state.income}
          renderItem={renderIncomeItem}
          keyextractor={item => item.id.toString()}
        />
      </ScrollView>
    );
  }
}

export default Income;