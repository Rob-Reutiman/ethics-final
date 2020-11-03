import React from 'react';

class Results extends React.Component {

  render() {

    const ones = this.props.answers.filter(x => x === 1);
    const twos = this.props.answers.filter(x => x === 2);

    let framework = '';
    if(ones.length / twos.length === 1) framework = "even";
    else if(ones.length / twos.length > 1) framework = "Egoism";
    else if(ones.length / twos.length < 1) framework = "Utilitarianism";

    return (
        <div>
          
          <h1>The Results Are In!</h1>

          <h3>You voted for the option that aligned greatest with your self interest {ones.length} out of {this.props.answers.length} times.</h3>
          <h3>You voted for the option that aligned with the maximum amount of total good for everyone {twos.length} out of {this.props.answers.length} times.</h3>

          <h3>{framework === "even" ? "You were split evenly between Egoism and Utilitarianism!" : `You tend to lean towards ${framework} when it comes to making moral decisions.`}</h3>

        </div>
    );
  }
}

export default Results;