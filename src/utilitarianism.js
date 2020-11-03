import React from 'react';

class Utilitarianism extends React.Component {

  render() {
    return (
        <div>

          <h1>Utilitarianism</h1>

          <h3>Utilitarianism is an ethical framework that differentiates between right and wrong based on outcomes. The decision that is right is the one that produces the greatest amount of good for the most amount of people.</h3>

          <button onClick={() => this.props.next()}>Begin Game!</button>

        </div>
    );
  }
}

export default Utilitarianism;