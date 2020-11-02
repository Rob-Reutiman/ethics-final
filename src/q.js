import React from 'react';
import questions from './ethics';

class Q extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      oneSelected: false,
      twoSelected: false
    }
  }

  nextQuestion() {
    // Make Sure Option Is Clicked
    if (!this.state.oneSelected && !this.state.twoSelected) return;

    // Update State and Move to Next Question
    let ans = this.state.oneSelected ? 1 : 2;
    this.setState({
      oneSelected: false,
      twoSelected: false
    });
    
    this.props.next(ans);
  }

  render () {

    const oneCSS = this.state.oneSelected ? 'selected' : '';
    const twoCSS = this.state.twoSelected ? 'selected' : '';

    return(
      <React.Fragment>

        <h1>Question {this.props.question + 1}</h1>
        <h3>{questions[this.props.question]["question"]}</h3>

        <button className={oneCSS} onClick={() => this.setState({oneSelected: true, twoSelected: false})}>
          {questions[this.props.question]["answer1"]}
        </button>

        <button className={twoCSS} onClick={() => this.setState({oneSelected: false, twoSelected: true})}>
          {questions[this.props.question]["answer2"]}
        </button>

        <button onClick={() => this.nextQuestion()}>Next -></button>

      </React.Fragment>
    );
  }
}

export default Q;