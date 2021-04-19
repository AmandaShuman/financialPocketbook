import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { EXPENSES } from '../shared/expenses';
import { EXPENSE_LISTS } from '../shared/expenseLists';

function RenderExpenses({ expense }) {
  if (expense) {
    return (
      console.log("expenses in RenderExpenses", expense),
      <Card >
        <Text>
          {expense.name}
        </Text>
      </Card>
    );
  }
  return <View />;
}


function RenderExpenseItems({ expenseDetail }) {

  const renderDetails = ({ item }) => {
    return (
      <ListItem
        title={item.name}
      />
    );
  };

  return (
    console.log("details for expenses", expenseDetail),
    <FlatList
      data={expenseDetail}
      renderItem={renderDetails}
      keyExtractor={item => item.id.toString()}
    />
  );
}

class ExpenseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: EXPENSES,
      expenseLists: EXPENSE_LISTS
    };
  }

  static navigationOptions = {
    title: 'Expense Detail'
  }

  render() {

    const expenseId = this.props.navigation.getParam('expenseId');
    const expense = this.state.expense.find(expense => expense.id === expenseId);
    const expenseDetail = this.state.expenseLists.filter(expense => expense.expensesId === expenseId);

    return (
      <View>
        <RenderExpenses expense={expense} />
        <RenderExpenseItems expenseDetail={expenseDetail} />
      </View>
    );
  }
}

export default ExpenseInfo;