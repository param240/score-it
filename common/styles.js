import React from 'react';
import { StyleSheet } from 'react-native';

const constants = {
  actionColor: '#ff8000'
};

var styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: '#ff8000',
    height: 30,
    width: 200,
  //  alignSelf: 'center',
  //  justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMain: {
    marginTop: 50,
    backgroundColor: '#24CE84',
    height: 50,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#FFFFFF',
  },
  layoutH: {
    flexDirection: 'row'
  },
  layoutV: {
    flexDirection: 'column'
  },
  fieldLabel: {
    width: 200,
    height: 50,
    marginTop: 15,
  },
  inputLabel: {
    width: 200,
    height: 50,
  }
});

module.exports = styles;
module.exports.constants = constants;
