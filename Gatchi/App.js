import React, {Componenet} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    color: 'white',
    textAlign: 'center',
    marginTop: 75
  }
});


class Actions extends Componenet{
  render() {
    return (
      <Text style={styles.actions}>WORDS</Text>
    )
  }
}
