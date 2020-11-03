import React from 'react';

class Egoism extends React.Component {

  render() {
    return (
        <div>

          <h1>Egoism</h1>

          <h3>Egoism claims that each person has but one ultimate goal: his/her own welfare. Egoism claims that a person is morally obligated to perform some action if and only if doing that action is in that individual's maximum self interest.</h3>

          <button onClick={() => this.props.next()}>Utilitarianism</button>

        </div>
    );
  }
}

export default Egoism;