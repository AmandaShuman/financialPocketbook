import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { EXPENSES } from '../shared/expenses';
import { EXPENSE_LISTS } from '../shared/expenseLists';

function RenderExpenses({expense}) {
  if (expense) {
    return (
      <Card
        featuredTitle={expense.name}
      >
        <Text>
          
        </Text>  
      </Card>
    );
  }
  return <View />;
}


function RenderExpenseItems({expenseDetail}) {
  
  const renderDetails = ({item}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
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
    const expenseDetail = this.state.expenseLists.filter(expense => expense.expenseId === expenseId);

    return (
      <View>
        <RenderExpenses expense={expense} />
        <RenderExpenseItems expenseDetail={expenseDetail} />
      </View>
    );
  }
}

export default ExpenseInfo;