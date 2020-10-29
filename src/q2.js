import React from 'react';

class Q2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      one_selected: null,
      two_selected: null
    }
  }

  render () {

    return(
      <React.Fragment>

        <h1>Question</h1>

        { /* Render buttons with color depending on selected */}
        { this.state.one_selected === true ? <button>Response 1 (selected)</button> : <button>Response 1 (not selected)</button> }

        { /* Render buttons with color depending on selected */}
        { this.state.two_selected === true ? <button>Response 2 (selected)</button> : <button>Response 2 (not selected)</button> }

      </React.Fragment>
    );
  }
}

export default Q2;