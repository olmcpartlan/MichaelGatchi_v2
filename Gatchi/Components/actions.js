import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Actions extends Component {
  constructor() {
    super();

  }

  render() {

    var randWork = Math.floor(Math.random() * 5)+5;
    var randEat = Math.floor(Math.random() * 5)+5;
    var randPlay = Math.floor(Math.random() * 5)+5;
    var randSleep = Math.floor(Math.random() * 10)+5;
    return (
      <View>
      <TouchableOpacity onPress={() => this.props.workHandler(randWork)} style={styles.button}>
        <Text style={styles.btnText}>Work</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => this.props.playHandler(randPlay)} style={styles.button} >
        <Text style={styles.btnText}>Play</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => this.props.eatHandler(randEat)} style={styles.button}>
        <Text style={styles.btnText}>Eat</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => this.props.sleepHandler(randSleep)} style={styles.button}>
        <Text style={styles.btnText}>Sleep</Text>
      </TouchableOpacity>




      </View>

    )
  }
}

const styles = StyleSheet.create ({
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
