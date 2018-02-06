import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
window.navigator.userAgent = 'react-native';
import io from 'socket.io-client';

import { Card, CardSection, Input, Button } from './components/common';

export default class App extends React.Component {
  state = {
    name: 'Your name'
  }

  constructor() {
    super();

    this.socket = io('localhost:3000', {jsonp: false});

    // this.socket.on('update', () => this.setState({name: 'Michael'}));
    // this.socket.on('update', () => console.log('fuckfuck'));

  }

  fuck() {
    this.socket.emit('update', { name: this.state.name });
    // this.socket.emit('update');

    console.log('fuck');
    console.log(this.state.name);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={{ fontSize: 30 }}>{this.state.name}</Text>
        </CardSection>

        <CardSection>
          <Input
            placeholder='Your name'
            onChangeText={(text) => this.setState({
              name: text
            })}
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.fuck.bind(this)}>
            Update
          </Button>
        </CardSection>
      </Card>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
