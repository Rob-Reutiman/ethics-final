import React from 'react';

class Egoism extends React.Component {

  render() {
    return (
        <div>

          <h1>Egoism</h1>

          <h3>Egoism claims that each person has but one ultimate aim: his/her own welfare. Egoism claims that a person is morally ought to perform some action if and only if doing it is in that individual's maximum self interset.</h3>

          <button onClick={() => this.props.next()}>Utilitarianism</button>

        </div>
    );
  }
}

export default Egoism;