import React from 'react';

// import Nav from '../nav';
import Q from './q';

// import Footer from '../footer';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: 0,
      answers: []
    }
  }

  next (ans) {

    let tempList = this.state.answers;
    tempList.push(ans);

    this.setState({
      question: this.state.question + 1,
      answers: tempList
    });

    console.log(this.state.answers);
  }

  render () {

    return(
      <React.Fragment>

        {/* <Nav active={this.props.match.url}/> */ }

        <div className='page-content'>

          {/* TODO: Generate Results Page Based on Question Index Value */}
          <Q question={this.state.question} next={this.next.bind(this)}/>

        </div>

        { /* <Footer/> */ }

      </React.Fragment>
    );
  }
}

export default Content;