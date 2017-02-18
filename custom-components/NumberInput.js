import React from 'react';
import { TextInput } from 'react-native';

import styles from '../common/styles';

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
    };
  }

  onChangeNumberField(text) {
    text = text.replace(/\D/g,'');
    this.setState({
      number: text
    });
    this.props.onChangeText(text);
  }

  render() {
    return (
      <TextInput style={styles.inputLabel}
        keyboardType="numeric"
        onChangeText={(text) => this.onChangeNumberField(text)}
        value={this.state.number} />
    )
  }
}

module.exports = NumberInput;
