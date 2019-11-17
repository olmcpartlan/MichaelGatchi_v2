import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default class Stats extends Component {


constructor() {
  super();
  console.log(this.props);
}

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.text}>Happiness: {this.props.happiness}</Text>
        <Text style={styles.text}>Fullness: {this.props.fullness}</Text>
        <Text style={styles.text}>Energy: {this.props.energy}</Text>
        <Text style={styles.text}>Meals: {this.props.meals}</Text>


      </View>

    )
  }
}

const styles = StyleSheet.create ({
  container: {
    margin: 50,
  },
  text: {
    color: 'white'
  }

});
