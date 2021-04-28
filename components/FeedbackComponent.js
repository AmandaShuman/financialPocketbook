import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, Alert } from 'react-native';
import { Card, Input, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

const getInitialState = () => ({
  feedback: '',
  email: ''
});

class Feedback extends Component {
  constructor(props) {
    super(props)

    this.state = getInitialState()
  }

  handleFeedback() {
    console.log(JSON.stringify(this.state));
    this.handleAlert();
  }

  handleAlert() {
    return Alert.alert(
      'Feedback Summary',
      `Feedback: ${this.state.feedback}\n Email:${this.state.email}\n
      Thank you for your feedback!`,
      [
        { //cancel button
          text: 'Cancel',
          onPress: () => this.resetForm(),
          style: 'cancel'
        },
        { //okay button
          text: 'OK',
          onPress: () => this.resetForm()
        },
      ],
      { cancelable: false }
    )
  }

  resetForm() {
    this.setState(getInitialState())
  }

  static navigationOptions = {
    title: 'Feedback'
  }

  sendMail() {
    MailComposer.composeAsync({
      recipients: ['financial_pocketbook@gmail.com'],
      subject: 'Feedback',
      body: 'To whom it may concern. I have the following feedback for you:'
    });
  }

  render() {
    return (
      <ScrollView>
        <Card
          title='Contact Information'
          wrapperStyle={{ margin: 20 }}
        >
          <Text>123 Happy Dr</Text>
          <Text>Washington, DC 20008</Text>
          <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
          <Text>Email: financial_pocketbook@gmail.com</Text>
          <Button
            title="Send Email"
            buttonStyle={{ backgroundColor: '#168118', margin: 30 }}
            icon={<Icon
              name='envelope-o'
              type='font-awesome'
              color='#fff'
              iconStyle={{ marginRight: 10 }}
            />}
            onPress={() => this.sendMail()}
          />
        </Card>
        <Card>
          <Text>Or send us feedback directly</Text>
          <View>
            <Input
              label='Feedback - Financial Pocketbook'
              leftIcon={{ type: 'font-awesome', name: 'comment' }}
              placeholder='Enter your feedback'
              containerStyle={{ padding: 5 }}
              onChangeText={feedback => this.setState({ feedback: feedback })}
              value={this.state.feedback}
            />
            <Input
              label='Your Email'
              leftIcon={{ type: 'font-awesome', name: 'envelope' }}
              placeholder='email@address.com'
              containerStyle={{ padding: 5 }}
              onChangeText={email => this.setState({ email: email })}
              value={this.state.email}
              keyboardType='email-address'
              type='email'
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              onPress={() => {
                this.handleFeedback();
              }}
              color='#157811'
              raised
              title='Submit'
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: '50%'
  }
})

export default Feedback;