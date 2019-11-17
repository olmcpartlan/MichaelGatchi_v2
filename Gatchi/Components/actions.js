import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from "react-native";

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
      <View style={styles.container}>
      <TouchableOpacity onPress={() => this.props.workHandler(randWork)} style={[styles.button, {backgroundColor: 'purple'}]}>
        <Text style={styles.btnText}>Work</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => this.props.playHandler(randPlay)} style={[styles.button, {backgroundColor: 'darkred'}]} >
        <Text style={styles.btnText}>Play</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => this.props.eatHandler(randEat)} style={[styles.button, {backgroundColor: 'darkslateblue'}]}>
        <Text style={styles.btnText}>Eat</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => this.props.sleepHandler(randSleep)} style={[styles.button, {backgroundColor: 'lightsalmon'}]}>
        <Text style={styles.btnText}>Sleep</Text>
      </TouchableOpacity>




      </View>

    )
  }
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius:50,
    width: (Math.round(Dimensions.get('window').width))/2

  },
  btnText: {
    fontSize:30,
    color: 'white'
  }
});
