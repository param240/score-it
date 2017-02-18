/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';
import Home from './components/Home';
import Score from './components/Score';

export default class ScoreIt extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    console.log('route',route);
    if(route.name === 'Home') {
      return <Home navigator={navigator} />
    }
    if( route.name === 'Score') {
      return <Score navigator={navigator} players={route.passProps.players} />
    }
  }

  render() {
    return (
      <Navigator style={{ flex:1 }}
      initialRoute={{ name: 'Home' }}
      renderScene={this.renderScene} />
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

AppRegistry.registerComponent('ScoreIt', () => ScoreIt);
