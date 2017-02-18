import React from 'react';
import { View } from 'react-native';

import styles from '../common/styles';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.props.columns === 'undefined' ? [] : this.props.columns,
    }
  }
  render() {
    var columns = this.state.columns.map((column, index) => {
      return (
        <Text>{column}</Text>
      )
    });

    return(
      <View style={styles.layoutH}>
        columns
      </View>
    )
  }
}

module.exports = Table;
