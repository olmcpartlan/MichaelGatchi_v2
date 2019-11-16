import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Overlay } from 'react-native-elements';

export default class LossOverlay extends Component {
  render() {
    return (
      <Overlay isVisible={this.props.visibility}>
        <Text>Loss Overlay!</Text>
      </Overlay>


    );
  }
}
