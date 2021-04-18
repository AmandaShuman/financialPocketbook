import React, { Component } from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from './HomeComponent';
import Income from './IncomeComponent';
import Expenses from './ExpensesComponent';
import ExpenseInfo from './ExpensesDetailComponent';

const HomeNavigator = createStackNavigator (
  {
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#168118'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: <Icon
        name='home'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    })
  }
);

const IncomeNavigator = createStackNavigator(
  {
    Income: { screen: Income }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#168118'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: <Icon
        name='bank'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    })
  }
);

const ExpensesNavigator = createStackNavigator(
  {
    Expenses: { screen: Expenses },
    ExpenseInfo: { screen: ExpenseInfo }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#168118'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: <Icon
        name='credit-card'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    })
  }
);

const MainNavigator = createDrawerNavigator (
  {
    Home: { 
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon
            name='home'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      } 
    },
    Income: { 
      screen: IncomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='bank'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Expenses: { 
      screen: ExpensesNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='credit-card'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    drawerBackgroundColor: '#036704'
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
      }}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 24
  }
});

export default Main;