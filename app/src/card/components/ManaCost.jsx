import React, { Component } from 'react';
import '../styles/manaCost.scss';

class ManaCost extends Component {
  render() {
    return (
      <div className="manaCost">
        <div>
          {this.props.cost}
        </div>
      </div>
    );
  }
}

export default ManaCost;
