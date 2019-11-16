import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./Images/giphy.gif")} />

      <Text style={styles.actions}>WORDS</Text>
      <Actions/>
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
    marginTop: 75
  },

  button: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,


  },
  btnText: {
    fontSize:24,
    color: 'white'
  }

});


class Actions extends Component {
  render() {
    return (
      <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Work</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Eat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Sleepgg</Text>
      </TouchableOpacity>


      </View>

    )
  }
}
