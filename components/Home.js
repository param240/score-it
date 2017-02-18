import React from 'react';
import { Picker, Text, TextInput, TouchableHighlight, View } from 'react-native';

import NumberInput from '../custom-components/NumberInput';
import styles from '../common/styles';
const constants = styles.constants;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 'rummy',
      gamePoint: '',
      playerName: '',
      playerList: [],
      otherGameName: '',
    }
  }

  handleGamePointChange(gamePoint) {
    console.log('gamePoint-->'+gamePoint);
    this.setState({
      gamePoint,
    });
  }

  onAddPlayer() {
    var playerList = this.state.playerList;
    playerList.push(this.state.playerName);
    this.setState({
      playerList,
      playerName: '',
    });
  }

  onStart() {
    console.log('onStart'+this.state.otherGameName);
    this.props.navigator.push({
    name: 'Score',
    passProps: {
      players: this.state.playerList,
    }
  })
  }

  render() {
    const players = this.state.playerList.map((player, index) => {
      return (
        <TextInput style={styles.inputLabel} key={index} value={player} />
      );
    });
    var otherGame = null;
    if (this.state.game === 'other') {
      otherGame = (
        <View style={styles.layoutH}>
          <Text style={styles.fieldLabel}>Name the Game</Text>
          <TextInput style={styles.inputLabel}
            onChangeText={(value) => this.setState({ otherGameName: value })}/>
        </View>
      );
    }
    return (
      <View style={styles.layoutV}>
        <View style={styles.layoutH}>
          <Text style={styles.fieldLabel}>Select the Game :</Text>
          <Picker style={styles.inputLabel}
            selectedValue={this.state.game}
            onValueChange={(game) => this.setState({ game })}>
            <Picker.Item label="Rummy" value="rummy"/>
            <Picker.Item label="Other" value="other"/>
          </Picker>
        </View>
        {otherGame}
        <View style={styles.layoutH}>
          <Text style={styles.fieldLabel}>Game Point</Text>
          <NumberInput
            onChangeText={(value) => this.handleGamePointChange(value)}/>
        </View>
        <View style={styles.layoutH}>
          <TextInput style={styles.fieldLabel}
            value={this.state.playerName}
            onChangeText={(playerName) => this.setState({ playerName })}/>
          <TouchableHighlight
            style={styles.button}
            underlayColor={constants.actionColor}
            onPress={() => this.onAddPlayer()}>
            <Text style={styles.buttonText}>Add Player</Text>
          </TouchableHighlight>
        </View>
        {players}
        <TouchableHighlight
          style={styles.buttonMain}
          underlayColor={constants.actionColor}
          onPress={() => this.onStart()}>
          <Text style={styles.buttonText}>Lets get Started!!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = Home;
