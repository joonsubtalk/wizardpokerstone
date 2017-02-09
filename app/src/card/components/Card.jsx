import React, { Component } from 'react';
import ManaCost from './ManaCost';
import '../styles/card.scss';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attackPoint: 0,
      cardTitle: '',
      hitPoint: 0,
      isMinion: true,
      manaCost: 0,
    }
  }
  render() {
    return (
      <div className="card">
        <ManaCost />
        <div className="cardTitle">{this.state.cardTitle}</div>
        <div className="attackPoint">{this.state.attackPoint}</div>
        <div className="hitPoint">{this.state.hitPoint}</div>
      </div>
    );
  }
}

export default Card;
