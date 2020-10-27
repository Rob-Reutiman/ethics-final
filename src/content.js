import React from 'react';

// import Nav from '../nav';
import Q1 from './q1';

// import Footer from '../footer';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: 1
    }
  }

  render () {

    return(
      <React.Fragment>

        {/* <Nav active={this.props.match.url}/> */ }

        <div className='page-content'>

          { this.state.question === 1 ? <Q1/> : null }

        </div>

        { /* <Footer/> */ }

      </React.Fragment>
    );
  }
}

export default Content;