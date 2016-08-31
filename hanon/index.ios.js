/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class hanon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native, TJ!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload, {'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('hanon', () => hanon);*/

import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, TextInput } from 'react-native';
import Hanon from './src/components/app'

class Bananas extends Component {
  render() {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{ width: 193, height: 110 }} />
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput style={{ height: 40, borderWidth: 1 }} placeholder="Type here to translate!" onChangeText={(text) => this.setState({ text: text }) } />
        <Text>{this.state.text.split(' ').map(word => word && '🍕').join(' ') }</Text>
      </View>
    );
  }
}

/*class Hanon extends Component {
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
        <Bananas></Bananas>
        <Greeting name="Lucas"></Greeting>
        <Blink text="Lucas is so cute!"></Blink>
        <Pizza></Pizza>
      </View>
    );
  }
}*/

AppRegistry.registerComponent('hanon', () => Hanon);
