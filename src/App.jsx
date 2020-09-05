import React, {Component} from "react";
import Die from './Die';
import './App.css'

export default class App extends Component {
  static defaultProps = {
    values: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  state = {
    diceOne: 'one',
    diceTwo: 'one',
    isShaking: false
  }

  rollDice = () => {
    const rndNum1 = Math.floor(Math.random() * 6);
    const rndNum2 = Math.floor(Math.random() * 6);
    this.setState({diceOne: this.props.values[rndNum1], diceTwo:this.props.values[rndNum2], isShaking: true })
  
    setTimeout(() => {
      this.setState({isShaking: false});
    }, 500)
  }

  render() {
    return (
      <div className="App">
        <div className="dices">
          <Die value={this.state.diceOne} isShaking={this.state.isShaking} />
          <Die value={this.state.diceTwo} isShaking={this.state.isShaking} />
        </div>

        <br />
        <button className="rollDice" onClick={this.rollDice}>{this.state.isShaking ? 'rolling...': 'Roll a dice'}</button>
      </div>
    );
  }
}


