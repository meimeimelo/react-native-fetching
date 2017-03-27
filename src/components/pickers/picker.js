import React, { Component } from 'react'
import { StyleSheet, Picker, Text } from 'react-native'

class PickerList extends Component {
  state = {
  selected1: 'key1',
  selected2: 'key1',
  selected3: 'key1',
}
  render() {
    return(
      <Picker
        style={styles.picker}
        selectedValue={this.state.language}
        >
        <Picker.Item label="Pokemon" value="java" />
        <Picker.Item label="Mo" value="js" />
      </Picker>
    )
  }
}

var styles = StyleSheet.create({
  picker: {
    width: 100,
  },
});

module.exports = PickerList
