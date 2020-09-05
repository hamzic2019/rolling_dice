import React, {Component} from 'react';
import './Die.css'

export default class Die extends Component {
  render(){
    return <i class={`die-item fas fa-dice-${this.props.isShaking ? 'one': this.props.value} ${this.props.isShaking ? 'shake': ''}`}></i>
  }
}