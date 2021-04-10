import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Expenses extends Component {

	static navigationOptions = {
		title: 'Expenses'
	}

	render() {
		return (
			<View>
				<Text>Expense Component</Text>
			</View>
		);
	}
}

export default Expenses;