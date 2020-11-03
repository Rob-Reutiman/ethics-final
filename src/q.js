import React from 'react';
import questions from './ethics';
import img1 from "./ethics_images/Q1.jpeg";
import img2 from "./ethics_images/Q2.jpeg";
import img3 from "./ethics_images/Q3.jpeg";
import img4 from "./ethics_images/Q4.jpeg";
import img5 from "./ethics_images/Q5.jpeg";
import img6 from "./ethics_images/Q6.jpeg";
import img7 from "./ethics_images/Q7.jpeg";
import img8 from "./ethics_images/Q8.jpeg";

const images = [ img1, img2, img3, img4, img5, img6, img7, img8]
class Q extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      oneSelected: false,
      twoSelected: false
    }
  }

  nextQuestion() {
    // Make Sure Option Is Clicked
    if (!this.state.oneSelected && !this.state.twoSelected) return;

    // Update State and Move to Next Question
    let ans = this.state.oneSelected ? 1 : 2;
    this.setState({
      oneSelected: false,
      twoSelected: false
    });
    
    this.props.next(ans);
  }

  render () {

    const oneCSS = this.state.oneSelected ? 'selected' : '';
    const twoCSS = this.state.twoSelected ? 'selected' : '';

    return (
      <div>
        <h1>Question {this.props.question + 1}</h1>
        
        <img src={images[this.props.question]} alt={"scenario"}/>
        <h3>{questions[this.props.question]["question"]}</h3>

        <div className="radio">

          <button className={oneCSS} onClick={() => this.setState({oneSelected: true, twoSelected: false})}>
            {questions[this.props.question]["answer1"]}
          </button>

          <button className={twoCSS} onClick={() => this.setState({oneSelected: false, twoSelected: true})}>
            {questions[this.props.question]["answer2"]}
          </button>
        </div>

        <button onClick={() => this.nextQuestion()}>Next -></button>
      </div>
    )
  }
}

export default Q;