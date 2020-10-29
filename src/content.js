import React from 'react';

// import Nav from '../nav';
import Q from './q';

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

          <Q question={this.state.question} next={(q) => this.setState({question: this.state.question + 1})}/>

        </div>

        { /* <Footer/> */ }

      </React.Fragment>
    );
  }
}

export default Content;