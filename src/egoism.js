import React from 'react';

class Egoism extends React.Component {

  render() {
    return (
        <div>

          <h1>Egoism</h1>

          <h3>Egoism can be thought of as self-ism. It claims that each person has but one ultimate aim: their own welfare. Egoism argues that a person is morally ought to perform some action if and only if doing it maximizes their self interest.

Egoism is often associated with early Greek hedonists--their goal was maximize pleasure and minimize pain.
</h3>

          <button onClick={() => this.props.next()}>Learn about Utilitarianism</button>

        </div>
    );
  }
}

export default Egoism;
