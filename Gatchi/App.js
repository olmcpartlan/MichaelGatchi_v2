import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import Actions from "./Components/actions";
import Stats from "./Components/stats"


export default class App extends Component {
  onPressAction = () => {
    let message = "sup";
    console.log(message);
    this.props._onPress(message);
  }

  constructor() {
    super();
    this.state = {
      happiness: 50,
      fullness: 20,
      energy: 50,
      meals: 3
    }
    this._workHandler = this._workHandler.bind(this)
    this._playHandler = this._playHandler.bind(this)
    this._eatHandler = this._eatHandler.bind(this)
    this._sleepHandler = this._sleepHandler.bind(this)

  }
  _workHandler = (changeVal) => {
    let newVal = this.state.energy -= changeVal;
    let randMeal = Math.floor(Math.random() * 3)+1;
    let newMeal = this.state.meals += randMeal;
    this.setState({
      energy: newVal,
      meals: newMeal
    });
  }
  _playHandler = (changeVal) => {
    let randPlay = Math.floor(Math.random() * 8)+2;
    let newPlay = this.state.happiness += randPlay;
    let newVal = this.state.energy -= changeVal;
    this.setState({
      energy: newVal,
      happiness: newPlay
    });
  }
  _eatHandler = (changeVal) => {
    if(this.state.meals == 0) {
      alert("Michael must work to earn another Meal!");
    }
    else {
      let newVal = this.state.fullness += changeVal;
      let removeMeal = this.state.meals -= 1;
      this.setState({
        fullness: newVal,
        meals: removeMeal
      });
    }

  }
  _sleepHandler = (changeVal) => {
    let newEnergy = this.state.energy += changeVal;
    let newFullness = this.state.fullness -= 5;
    this.setState({
      energy: newEnergy,
      fullness: newFullness
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./Images/giphy.gif")} />

        <Stats happiness={this.state.happiness} happiness={this.state.happiness} fullness={this.state.fullness} energy={this.state.energy} meals={this.state.meals}/>


        <Actions workHandler={ this._workHandler }
        playHandler={ this._playHandler } eatHandler={ this._eatHandler } sleepHandler={ this._sleepHandler }  happiness={this.state.happiness} fullness={this.state.fullness} energy={this.state.energy} meals={this.state.meals}/>


        <Button onPress={() => this.onPressAction()} title="press bitch"></Button>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  actions: {
    marginTop: 5
  },



});
