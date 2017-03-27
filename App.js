import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PickerList from './src/components/pickers/picker'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PickerList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
