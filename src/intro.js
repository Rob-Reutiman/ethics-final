import React from 'react';

class Intro extends React.Component {

  render() {
    return (
        <div>

          <h1>Welcome!</h1>

          <h3>For our project, we created a guided scenario game designed to inform users about the ethical frameworks of Egoism and Utilititarianism. It also gauges a user's response and informs them whether they lean more towards Egoism or Utilitarianism depending on certain contexts. We recommend spending 5 minutes of reading and thinking before answering each question.</h3>
          <h3>Click the button to learn a bit more about these Ethical Frameworks before the game begins!</h3>

          <button onClick={() => this.props.next()}>Learn about Egoism</button>

        </div>
    );
  }
}

export default Intro;