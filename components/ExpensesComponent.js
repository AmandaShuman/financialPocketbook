import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { EXPENSES } from '../shared/expenses';

const ExpenseSummary = () => {
  return (
    <Card>
      <Text style={{ margin: 10 }}>
        Now that you know how much money you have, the best way to keep it is to figure out how you are spending it. Once you've entered your spending data, you can see what trends are occurring to see where you can save yourself money.
      </Text>
    </Card>
  );
}

class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: EXPENSES
    };
  }

	static navigationOptions = {
		title: 'Expenses'
	}

	render() {

    const { navigate } = this.props.navigation;
    const renderExpenseItem = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          //onPress={() => navigate('ExpenseInfo', { expenseId: item.id })}
        />
      )
    };

		return (
      <View>
        <ExpenseSummary />
        <FlatList
          data={this.state.expenses}
          renderItem={renderExpenseItem}
          keyextractor={item => item.id.toString()}
        />
      </View>
		);
	}
}

export default Expenses;