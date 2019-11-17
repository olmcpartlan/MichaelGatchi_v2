import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Overlay } from 'react-native-elements';

export default class VictoryOverlay extends Component {
  render() {
    return (
      <Overlay isVisible={this.props.visibility}>
      <View style={styles.container}>
        <Text>Victory Overlay!</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.close()}>
            <Text style={styles.text}>Restart</Text>
          </TouchableOpacity>
        </View>
      </Overlay>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  button: {
    marginTop: 150,
    alignItems: 'center',
    backgroundColor: 'grey',

  },
  text: {
    fontSize:30,
  }
});
