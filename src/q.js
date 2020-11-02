import React from 'react';
import ethics from './ethics';

class Q extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      one_selected: false,
      two_selected: false
    }
  }

  nextQuestion() {
    // Make Sure Option Is Clicked
    if (!this.state.one_selected && !this.state.two_selected) return;

    // Update State and Move to Next Question
    this.setState({
      one_selected: false,
      two_selected: false
    });
    let send = this.state.one_selected ? 0 : 1;
    this.props.next(send);
  }

  btnOneClick () {
    this.setState({
      one_selected: true,
      two_selected: false
    })
  }

  btnTwoClick () {
    this.setState({
      one_selected: false,
      two_selected: true
    })
  }

  render () {

    return(
      <React.Fragment>

        <h1>Question {this.props.question + 1}/10</h1>
        <h3>{ ethics['questions'][this.props.question][0] }</h3>

        <button style={{ backgroundColor: this.state.one_selected ? 'blue' : 'white' }} onClick={this.btnOneClick.bind(this)}>
          {ethics['questions'][this.props.question][1]}
        </button>

        <button style={{ backgroundColor: this.state.two_selected ? 'blue' : 'white' }} onClick={this.btnTwoClick.bind(this)}>
          {ethics['questions'][this.props.question][2]}
        </button>

        <button onClick={() => this.nextQuestion()}>Next Question</button>

      </React.Fragment>
    );
  }
}

export default Q;