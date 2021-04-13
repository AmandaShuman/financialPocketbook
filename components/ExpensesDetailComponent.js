import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card } from 'react';
import { EXPENSES } from '../shared/expenses';
import { EXPENSE_LISTS } from '../shared/expenseLists';

function RenderExpenseItems({expense}) {
  if (expense) {
    return (
      <Card 
        featuredTitle={expense.name}
      />
    );
  }
}

class ExpenseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses = EXPENSES,
      expenseLists = EXPENSE_LISTS
    };
  }

  static navigationOptions = {
    title: 'title'
  }

  render() {

    const expenseId = this.props.navigation.getParam('expenseId');
    const expense = this.state.expenses.find(expense => expense.id === expenseId);
    const expenseDetail = this.state.expenseLists.filter(expenses => expenses.expenseId === expenseId);

    return (
      <View>
        <RenderExpenses expense={expense} />
      </View>
    );
  }
}

export default ExpenseInfo;