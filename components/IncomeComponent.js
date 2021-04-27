import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
  return {
    income: state.income
  };
}

const IncomeSummary = () => {
  return (
    <Card>
      <Text style={{ margin: 10 }}>
        The first step to getting your finances in order is to figure out how much money you have to work with. Take some time to enter in the money you are receiving. Click on an expense name to start entering your expenses.
      </Text>
    </Card>
  );
}

class Income extends Component {
  
  static navigationOptions = {
    title: 'Income'
  }

  render() {

    const renderIncomeItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
        >
        </ListItem>
      )
    };

    if (this.props.income.isLoading) {
      return <Loading />;
    }
    if (this.props.income.errMess) {
      return (
        <View>
          <Text>{this.props.income.errMess}</Text>
        </View>
      );
    }

    return (
      <ScrollView>
        <IncomeSummary />
        <FlatList
          data={this.props.income.income}
          renderItem={renderIncomeItem}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Income);