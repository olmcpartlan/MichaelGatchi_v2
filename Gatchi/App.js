import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import Actions from "./Components/actions";
import Stats from "./Components/stats";
import VictoryOverlay from "./Components/victoryOverlay"
import LossOverlay from "./Components/lossOverlay"


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
      meals: 3,
      victory: false,
      loss: false,
      message: ""

    }
    this._workHandler = this._workHandler.bind(this)
    this._playHandler = this._playHandler.bind(this)
    this._eatHandler = this._eatHandler.bind(this)
    this._sleepHandler = this._sleepHandler.bind(this)

  }
  _workHandler = (changeVal) => {
    let negChance = Math.floor(Math.random() * 7)+1;
    if(negChance == 4) {
      let newMeal = this.state.meals -= 1;
      this.setState({
        meals: newMeal,
        message: "Michael has to go on a sales call with Andy. +0 energy, -1 meals"
      });
    }
    else {
      let newVal = this.state.energy -= changeVal;
      let randMeal = Math.floor(Math.random() * 3)+1;
      let newMeal = this.state.meals += randMeal;
      this.setState({
        energy: newVal,
        meals: newMeal,
        message: `Michael had a great day at work! +${changeVal} energy, ${randMeal} meals.`
      });
    }

    this.victoryCheck();
    this.lossCheck();

  }
  _playHandler = (changeVal) => {
    let negChance = Math.floor(Math.random() * 3)+1;
    if(negChance == 3) {
      this.setState({
        message: "Michael said an offensive joke so Toby called a meeting. -5 happiness"
      });
    }
    else {
      let randPlay = Math.floor(Math.random() * 8)+2;
      let newPlay = this.state.happiness += randPlay;
      let newVal = this.state.energy -= changeVal;
      this.setState({
        energy: newVal,
        happiness: newPlay,
        message: `Michael played a prank on Dwight! +${randPlay} happiness, +${changeVal} energy`
      });

    }
    this.victoryCheck();
    this.lossCheck();
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
        meals: removeMeal,
        message: `Michael had a great meal, +${changeVal} fullness, -1 meals`
      });
      this.victoryCheck();
      this.lossCheck();
    }

  }
  _sleepHandler = (changeVal) => {
    let newEnergy = this.state.energy += changeVal;
    let newFullness = this.state.fullness -= 5;
    this.setState({
      energy: newEnergy,
      fullness: newFullness,
      message: `Michael had a great dream about Holly, +${changeVal} energy, -${newFullness}`
    });
    this.victoryCheck();
    this.lossCheck();
  }

  victoryCheck = () => {
    if(this.state.fullness >= 100 || this.state.happiness >= 100) {
      this.setState({
        victory: true
      })

    }
  }
  lossCheck = () => {
    if(this.state.fullness <= 0 || this.state.happiness <= 0 || this.state.happiness <= 0) {
      this.setState({
        loss: true
      })
    }
  }


  render() {
    return (
      <View style={styles.container}>
      <VictoryOverlay visibility={this.state.victory} />
      <LossOverlay visibility={this.state.loss} />
        <Image source={require("./Images/giphy.gif")} />

        <Stats happiness={this.state.happiness} happiness={this.state.happiness} fullness={this.state.fullness} energy={this.state.energy} meals={this.state.meals}/>

        <Text style={styles.message}>{this.state.message}</Text>


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
  message: {
    margin: 10
  }



});
