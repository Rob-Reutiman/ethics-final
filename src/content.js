import React from 'react';
import Intro from './intro';
import Egoism from './egoism';
import Utilitarianism from './utilitarianism';
import Q from './q';
import Results from './results';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showIntro: true,
      showEgoism: false,
      showUtilitarian: false,
      showQ: false,
      showResults: false,
      question: 0,
      answers: []
    }
  }

  next(ans) {
    let tempList = this.state.answers;
    tempList.push(ans);

    if(this.state.question !== 7) {
      this.setState({
        question: this.state.question + 1,
        answers: tempList
      });
    } else {
      this.setState({
        answers: tempList,
        showResults: true,
        showQ: false
      });
    }
  }

  render() {

    return (
        <div className='page-content'>

          {this.state.showIntro && <Intro next={() => this.setState({showIntro: false, showEgoism: true})}/>}

          {this.state.showEgoism && <Egoism next={() => this.setState({showEgoism: false, showUtilitarian: true})}/>}

          {this.state.showUtilitarian && <Utilitarianism next={() => this.setState({showUtilitarian: false, showQ: true})}/>}

          {this.state.showQ && <Q question={this.state.question} next={(ans) => this.next(ans)}/>}

          {this.state.showResults && <Results answers={this.state.answers}/>}

        </div>
    );
  }
}

export default Content;