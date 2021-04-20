import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, StyleSheet } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { OVERVIEW } from '../shared/overviewSpending';

const HomeSummary = () => {
  return (
    <Card>
      <Text style={{ margin: 10 }}>
        This will help show you where your money is going. Take a look at the percentages given so you can see where you are spending money and think about where you can cut down on your spending to put money where you want it (like savings!).
      </Text>
    </Card>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: OVERVIEW
    };
  }

  static navigationOptions = {
    title: 'Home'
  }

  render() {

    const renderHomeItem = ({item}) => {
      return (
        <ListItem
          title={item.name}
        />
      )
    };

    return (
      <View>
        <HomeSummary />
        <Text style={styles.headers}>Total Income:</Text>
        <Text style={styles.headers}>Total Expenses: </Text>
        <ScrollView>
          <Card>
            <Text style={styles.headers}>Expense Breakdown</Text>
            <FlatList
              data={this.state.overview}
              renderItem={renderHomeItem}
              keyExtractor={item => item.id.toString()}
            />
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headers: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 80
  }
})

export default Home;