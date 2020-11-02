import React from 'react';

// import Nav from '../nav';
import Q from './q';

// import Footer from '../footer';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: 1,
      answers: []
    }
  }

  next(ans) {
    console.dir("being called")
    let tempList = this.state.answers;
    tempList.push(ans);

    this.setState({
      question: this.state.question + 1,
      answers: tempList
    });
  }

  render() {

    return (
      <React.Fragment>

        {/* <Nav active={this.props.match.url}/> */ }

        <div className='page-content'>

          <Q question={this.state.question} next={(ans) => this.next(ans)}/>

        </div>

        { /* <Footer/> */ }

      </React.Fragment>
    );
  }
}

export default Content;