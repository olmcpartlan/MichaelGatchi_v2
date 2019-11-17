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
        <View style={styles.colLeft}>
          <Text style={styles.text}>Happiness: {this.props.happiness}</Text>
          <Text style={styles.text}>Fullness:      {this.props.fullness}</Text>
        </View>
        <View style={styles.colRight}>
          <Text style={styles.text}>Energy: {this.props.energy}</Text>
          <Text style={styles.text}>Meals:    {this.props.meals}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 50,
    marginBottom: 50,
    flexDirection: 'row'
  },
  colLeft: {
    alignItems: 'flex-start',
    marginRight: 30
  },
  colRight: {
    alignItems: 'flex-end',
    marginLeft: 30
  },
  text: {
    color: 'white',
    fontSize:25,
  }

});
