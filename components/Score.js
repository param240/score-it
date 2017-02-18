import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import styles from '../common/styles';
const constants = styles.constants;

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.players,
    }
  }

  newGame() {
    console.log('newGame');
    this.props.navigator.push({
    name: 'Home', // Matches route.name
  })
  }

  finishGame() {
    console.log(this.state.players);
  }

  render() {
    return (
      <View style={styles.layoutH}>
        <TouchableHighlight
          style={styles.button}
          underlayColor={constants.actionColor}
          onPress={() => this.newGame()}>
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor={constants.actionColor}
          onPress={() => this.finishGame()}>
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Score;
