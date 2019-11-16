import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Overlay } from 'react-native-elements';

export default class VictoryOverlay extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true
    }
    // console.log(this.props.visible);
  }

  render() {
    return (
      <Overlay isVisible={this.props.visibility}>
        <Text>Victory Overlay!</Text>
      </Overlay>


    );
  }
}
