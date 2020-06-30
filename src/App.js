import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Score from './Score';

class App extends Component {
  state = {
    numQuestions: 0,
    numCorrect: 0
  };

  checkAnswer = (a) => {
    if(a === true) {
      this.setState( {
       numCorrect: this.state.numCorrect + 1
      })
    } 
    this.setState( {
      numQuestions: this.state.numQuestions + 1
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game checkAnswer={this.checkAnswer} />
          <Score numQuestions={this.state.numQuestions} numCorrect={this.state.numCorrect} />
        </div>
      </div>
    );
  }
}

export default App;
