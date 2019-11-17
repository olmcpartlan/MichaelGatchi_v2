import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Overlay } from 'react-native-elements';

export default class VictoryOverlay extends Component {
  constructor() {
    super();
    this.state = {
      image: require("../Images/michael9.gif")
    }
  }
  render() {
    return (
      <Overlay isVisible={this.props.visibility}>
      <View style={styles.container}>
        <Text style={styles.text}>Congrats! Michael made it to the weekend!</Text>
          <Image source={this.state.image} style={styles.image}/>
          <Text>Thank you for playing, feel free to let me know if you have any ideas to make this game better!</Text>
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
    backgroundColor: 'red',
    borderRadius: 50

  },
  text: {
    fontSize:30,
  },
  image: {
    width: 275
  }
});
