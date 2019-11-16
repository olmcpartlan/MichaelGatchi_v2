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
        <Text>Happiness: {this.props.happiness}</Text>
        <Text>Fullness: {this.props.fullness}</Text>
        <Text>Energy: {this.props.energy}</Text>
        <Text>Meals: {this.props.meals}</Text>


      </View>

    )
  }
}

const styles = StyleSheet.create ({
  container: {
    margin: 50,
  }
});
