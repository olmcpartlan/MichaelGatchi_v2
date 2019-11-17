import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import Actions from "./Components/actions";
import Stats from "./Components/stats";
import VictoryOverlay from "./Components/victoryOverlay";
import LossOverlay from "./Components/lossOverlay";
import OpeningOverlay from "./Components/openingOverlay";
import { Dimensions } from "react-native";


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
      opening: true,
      message: "",
      image: require("./Images/michael1.gif")

    }
    this._workHandler = this._workHandler.bind(this)
    this._playHandler = this._playHandler.bind(this)
    this._eatHandler = this._eatHandler.bind(this)
    this._sleepHandler = this._sleepHandler.bind(this)
    this._closeOpening = this._closeOpening.bind(this)
    this._restart = this._restart.bind(this)

  }
  _workHandler = (changeVal) => {
    let negChance = Math.floor(Math.random() * 7)+1;
    if(negChance == 4) {
      let newMeal = this.state.meals -= 1;
      this.setState({
        meals: newMeal,
        message: "Michael has to go on a sales call with Andy.\n +0 energy, -1 meals",
        image: require("./Images/michael4.gif")
      });
    }
    else {
      let newVal = this.state.energy -= changeVal;
      let randMeal = Math.floor(Math.random() * 3)+1;
      let newMeal = this.state.meals += randMeal;
      this.setState({
        energy: newVal,
        meals: newMeal,
        message: `Michael had a great day at work!\n -${changeVal} energy, ${randMeal} meals.`,
        image: require("./Images/michael5.gif")
      });
    }

    this.victoryCheck();
    this.lossCheck();

  }
  _playHandler = (changeVal) => {
    let negChance = Math.floor(Math.random() * 3)+1;
    if(negChance == 3) {
      this.setState({
        message: "Michael said an offensive joke so Toby called a meeting.\n -5 happiness",
        image: require("./Images/michael2.gif")
      });
    }
    else {
      let randPlay = Math.floor(Math.random() * 8)+2;
      let newPlay = this.state.happiness += randPlay;
      let newVal = this.state.energy -= changeVal;
      this.setState({
        energy: newVal,
        happiness: newPlay,
        message: `Michael played a prank on Dwight!\n +${randPlay} happiness, -${changeVal} energy`,
        image: require("./Images/michael3.gif")

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
        message: `Michael had a great meal,\n +${changeVal} fullness, -1 meals`,
        image: require("./Images/michael6.gif")
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
      message: `Michael had a great dream about Holly,\n +${changeVal} energy, -5 fullness`,
      image: require("./Images/michael7.gif")
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
        loss: true,
        image: 8
      })
    }
  }

  _closeOpening = () => {
    this.setState({
      opening: false
    })
  }

  _restart= () => {
    this.setState({
      happiness: 50,
      fullness: 20,
      energy: 50,
      meals: 3,
      victory: false,
      loss: false,
      opening: false,
      message: "",
      image: require("./Images/michael1.gif")

    });
  }


  render() {

    return (
      <View style={styles.container}>
      <OpeningOverlay visibility={this.state.opening} close={this._closeOpening} image = {this.state.image}/>
      <VictoryOverlay visibility={this.state.victory} close={this._restart} image = {this.state.image}/>
      <LossOverlay visibility={this.state.loss} close={this._restart} image = {this.state.image}/>
        <Image style={styles.image} source={this.state.image} />


        <Stats style={styles.stats} happiness={this.state.happiness} happiness={this.state.happiness} fullness={this.state.fullness} energy={this.state.energy} meals={this.state.meals}/>

        <Text style={styles.message}>{this.state.message}</Text>


        <Actions workHandler={ this._workHandler }
        playHandler={ this._playHandler } eatHandler={ this._eatHandler } sleepHandler={ this._sleepHandler }  happiness={this.state.happiness} fullness={this.state.fullness} energy={this.state.energy} meals={this.state.meals}/>



      </View>
    );
  }
}
//const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',

  },
  actions: {
    marginTop: 5
  },
  message: {
    margin: 10,
    color: 'white',
    fontSize: 25
  },
  image: {
    margin: 33,
    height: 200,
    width: Math.round(Dimensions.get('window').width)
  },
  stats: {
    height: 40
  }



});
