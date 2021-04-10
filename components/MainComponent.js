import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from './HomeComponent';
import Income from './IncomeComponent';
import Expenses from './ExpensesComponent';

const HomeNavigator = createStackNavigator (
  {
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#168118'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const IncomeNavigator = createStackNavigator(
  {
    Income: { screen: Income }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#168118'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const ExpensesNavigator = createStackNavigator(
  {
    Expenses: { screen: Expenses }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#168118'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
);

const MainNavigator = createDrawerNavigator (
  {
    Home: { screen: HomeNavigator },
    Income: { screen: IncomeNavigator },
    Expenses: { screen: ExpensesNavigator }
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

export default Main;