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
        <View style={styles.col}>
          <Text style={styles.text}>Happiness: {this.props.happiness}</Text>
          <Text style={styles.text}>Fullness: {this.props.fullness}</Text>
        </View>
        <View>
          <Text style={styles.text}>Energy: {this.props.energy}</Text>
          <Text style={styles.text}>Meals: {this.props.meals}</Text>

        </View>


      </View>

    )
  }
}

const styles = StyleSheet.create ({
  container: {
    margin: 50,
    flexDirection: 'row'
  },
  col: {
    marginRight: 15
  },
  text: {
    color: 'white',
    fontSize:25,
  }

});
