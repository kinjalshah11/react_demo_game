import React, {Component} from "react";
import QuizOptions from './QuizOptions'
class Quiz extends Component{

	constructor(props){
		super(props);

		let riddle = this.playGame();

		this.state = {riddle}
		this.renderOptions = this.renderOptions.bind(this);
	}
	renderOptions(){
		return(
			<div className="options">
			{this.state.riddle.resultArray.map((option,i) =>
				<QuizOptions option={option} key={i}/>
			)}
			</div>
		);
	}

	rendomNumber(min,max){
		return Math.floor(Math.random() * (max-min + 1)) + min ;
	}

	rendomOptions(sum){
		let  resullt = sum;
		let resultArray = [];

		let addSub = this.rendomNumber(0,1)
		if (addSub === 1){

		}else{

		}
		return resultArray;
	}

	playGame(){
		let field1 = this.rendomNumber(20,50);
		let field2 = this.rendomNumber(50,100);
		let answer = field1 + field2;
		let resultArray = this.rendomOptions(answer);
		let riddle = {
			resultArray: resultArray,
			field1: field1,
			field2: field2,
			answer: answer
		};
		console.log(riddle);
		return riddle;
	}

	render(){
		return(
			<div className="quiz">
				<div className="quiz-content">
					<p className="question">What is the SUM of <span className="text-info">{this.state.riddle.field1}</span> + <span className="text-info">{this.state.riddle.field2}</span> ?</p>
					{this.renderOptions()}
				</div>
				<div className="play-again">
					<a className="button">Play Again</a>
				</div>
			</div>
		);
	}
}

export default Quiz;