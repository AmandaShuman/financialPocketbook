import React, { Component } from 'react';
import Home from './HomeComponent';
import Income from './IncomeComponent';
import Expenses from './ExpensesComponent';
import ExpenseInfo from './ExpensesDetailComponent';
import Feedback from './FeedbackComponent';
import { View, Platform, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
//import the thunked action creators
import { fetchIncome } from '../redux/ActionCreators';

const mapDispatchToProps = {
  fetchIncome
}

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
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

const FeedbackNavigator = createStackNavigator(
  {
    Feedback: { screen: Feedback }
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
        name='comment'
        type='font-awesome'
        iconStyle={styles.stackIcon}
        onPress={() => navigation.toggleDrawer()}
      />
    })
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
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
    },
    Feedback: {
      screen: FeedbackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name='comment'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    drawerBackgroundColor: '#3e9c35',

    contentOptions: {
      activeTintColor: "#FFF",
      inactiveTintColor: "#7B32A0",
    },
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

  //want main component to call the action creators after the component has been created
  componentDidMount() {
    this.props.fetchIncome();
  }

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

export default connect(null, mapDispatchToProps)(Main);