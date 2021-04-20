import React, { Component } from 'react';
import { ScrollView, Text, View, Button, Modal, StyleSheet } from 'react-native';
import { Card, Input } from 'react-native-elements';

const getInitialState = () => ({
  showModal: false,
  feedback: '',
  email: ''
});

class Feedback extends Component {
  constructor(props) {
    super(props)

    this.state = getInitialState()
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal })
  }

  resetForm() {
    this.setState(getInitialState())
  }

  static navigationOptions = {
    title: 'Feedback'
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
        </Card>
        <Card>
          <Text>Or send us feedback directly</Text>
          <View>
            <Input
              label='Feedback'
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
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              onPress={() => {
                this.toggleModal();
              }}
              color='#157811'
              raised
              title='Submit'
            />
          </View>
        </Card>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => this.toggleModal()}
        >
          <View style={styles.modal}>
            <Text>Feedback: {this.state.feedback}</Text>
            <Text>Email: {this.state.email}</Text>
            <Text>Thank you for your feedback!</Text>
          </View>
          <Button
            onPress={() => {
              this.toggleModal();
              this.resetForm();
            }}
            color='#808080'
            title='Close'
          />
        </Modal>
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