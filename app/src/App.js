import React, { Component } from 'react';
import Card from './card/components/Card';
import logo from './logo.svg';
import './App.scss';
import {connect} from 'react-redux';
import {setCardTitle, removeCardTitle} from './actions';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: 'whatup'
    }
  }

  addText() {
    this.props.setCardTitle(this.state.text + Math.round(Math.random()))
  }

  removeCardTitle(id) {
    this.props.removeCardTitle(id);
  }

  renderText() {
    const {cards} = this.props;
    return (
      <ul>
        {
          cards.map(cards => {
            return (
            <li key={cards.id}>
              <div>
              {cards.text}
              </div>
              <div onClick={
                () => this.removeCardTitle(cards.id)
              }>
                XXX
              </div>
            </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    console.log('this.props', this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Card />
        <button
          type="button"
          onClick={()=>this.addText()}
          >
          CLICK MEH
          </button>
          {this.renderText()}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cards: state
  }
}

export default connect(mapStateToProps, {setCardTitle, removeCardTitle})(App);
