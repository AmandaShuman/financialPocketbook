import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Feedback extends Component {

    static navigationOptions = {
        title: 'Feedback'
    }

    render() {
        return (
            <ScrollView>
                <Card
                    title='Feedback'
                    wrapperStyle={{ margin: 20 }}
                >
                    <Text>123 Happy Dr</Text>
                    <Text>Washington, DC 20008</Text>
                    <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                    <Text>Email: financial_pocketbook@gmail.com</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Feedback;