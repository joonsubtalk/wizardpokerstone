import React, { Component } from 'react';
import '../styles/manaCost.scss';

class ManaCost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      manaCost: 0,
    }
  }
  render() {
    return (
      <div className="manaCost">
        {this.state.manaCost}
      </div>
    );
  }
}

export default ManaCost;
