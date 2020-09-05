import React, {Component} from "react";
import Die from './Die';
import './App.css'

export default class App extends Component {
  static defaultProps = {
    values: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  state = {
    diceOne: 'one',
    diceTwo: 'one'
  }

  rollDice = () => {
    const rndNum1 = Math.floor(Math.random() * 6);
    const rndNum2 = Math.floor(Math.random() * 6);
    this.setState({diceOne: this.props.values[rndNum1], diceTwo:this.props.values[rndNum2] })
  }

  render() {
    return (
      <div className="App">
        <div className="dices">
          <Die value={this.state.diceOne} />
          <Die value={this.state.diceTwo} />
        </div>

        <br />
        <button className="rollDice" onClick={this.rollDice}>ROLL A DICE</button>
      </div>
    );
  }
}


