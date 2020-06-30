import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: this.generateNewNumbers()[0],
      value2: this.generateNewNumbers()[1],
      value3: this.generateNewNumbers()[2],
      proposedAnswer: this.generateNewNumbers()[3]
    }
  }

  generateNewNumbers = () => {
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const result = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
      return [value1, value2, value3, result];
  }
  
  setNewNumbers = (arr) => {
	this.setState({
    	value1: arr[0],
        value2: arr[1],
        value3: arr[2],
        proposedAnswer: arr[3]
    })  
  }
  
  checkAnswer = (event) => {
    const numberArr = this.generateNewNumbers();
    const buttonName = event.target.name;
    if(this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer && buttonName === 'true') {
      this.props.checkAnswer(true);
    } else if(this.state.value1 + this.state.value2 + this.state.value3 !== this.state.proposedAnswer && buttonName === 'false') {
      this.props.checkAnswer(true);
    } else {
      this.props.checkAnswer(false);
    }
     this.setNewNumbers(numberArr);
  }
  
  render() {
    return (
    <div>
      <div className="equation">
            <p className="text">
     {`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}
</p>
      </div>
          <button name="true" onClick={this.checkAnswer}>True</button>
          <button name="false" onClick={this.checkAnswer}>False</button>
    </div>
    )
  }
}

export default Game;
