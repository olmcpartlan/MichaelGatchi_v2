import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Overlay } from 'react-native-elements';

export default class OpeningOverlay extends Component {

  render() {
    return(
      <Overlay isVisible={this.props.visibility}>
        <View style={styles.container}>
          <Text style={styles.text}>Welcome to MichaelGatchi_v2!</Text>
          <Text>Help Michael make it to the weekend by getting his Happiness or Fullness to 100!</Text>
          <Text>Working will take energy, but Michael will earn meals </Text>
          <Text>Playing will increase happiness, but take energy</Text>
          <Text>Eating will replenish fullness, but don't forget Michael needs meals before he can eat!</Text>
          <Text>Sleeping will replenish energy, but he will be hungry when he wakes up.</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.close()}>
            <Text style={styles.text}>Start!</Text>
          </TouchableOpacity>
        </View>

      </Overlay>
    )
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
    backgroundColor: 'green',
    borderRadius: 50

  },
  text: {
    fontSize:30,
  }
});
