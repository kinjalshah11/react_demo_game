import React, {Component} from "react";
import QuizOptions from './QuizOptions'
import classNames from 'classnames';
class Quiz extends Component{

	constructor(props){
		super(props);

		let riddle = this.playGame();
		let correct = false;
		let gameover = false;

		this.state = {riddle, correct, gameover};
		this.renderOptions = this.renderOptions.bind(this);
		this.checkResults = this.checkResults.bind(this);
		this.play = this.play.bind(this);
	}
	renderOptions(){
		return(
			<div className="options">
			{this.state.riddle.resultArray.map((option,i) =>
				<QuizOptions option={option} key={i} checkResults={(option) => this.checkResults(option)}/>
			)}
			</div>
		);
	}

	checkResults(option){
		console.log('adsasddnj' + option);
		if(this.state.riddle.answer === option){
			console.log('correct answer');
			this.setState({correct: true, gameover: true});
		}else {
			console.log('wrong answer');
			this.setState({correct: false, gameover: true});
		}
	}

	rendomNumber(min,max){
		return Math.floor(Math.random() * (max-min + 1)) + min ;
	}

	rendomOptions(sum){
		let  result = sum;
		let resultArray = [];
		let randomNumberArray = [];

		while(randomNumberArray.length <= 3){
			let randomNumber = this.rendomNumber(1,19);
			if (randomNumberArray.indexOf(randomNumber) > -1) continue;
			randomNumberArray.push(randomNumber)
		}

		console.log("jsadhjkas",randomNumberArray);

		for (let i=0; i<3; i++){
			let addSub = this.rendomNumber(0,1)
			if (addSub === 1){
				result += randomNumberArray[i];
				resultArray.push(result);
			}else{
				result -= randomNumberArray[i]
				resultArray.push(result);
			}
		}

		return resultArray;
	}

	playGame(){
		let field1 = this.rendomNumber(20,50);
		let field2 = this.rendomNumber(20,50);
		let answer = field1 + field2;
		let resultArray = this.rendomOptions(answer);
		resultArray.push(answer);
		resultArray.sort(function(a,b){ return 0.5 - Math.random()});
		let riddle = {
			resultArray: resultArray,
			field1: field1,
			field2: field2,
			answer: answer
		};
		console.log(riddle);

		if (this.state && this.state.gameover){
			this.setState({riddle: riddle})
		}else {

			return riddle;
		}

	}

	renderMessage(){
		if(this.state.correct){
			return <h3> Good JOb! Hit Button Play Again </h3>
		}else {
			return <h3> ohh! Hit Button Play Again </h3>
			
		}
	}
	play(){
		this.setState({correct: false,gameover: false});
		this.playGame();
	}

	render(){
		return(
			<div className="quiz">
				<div className="quiz-content">
					<p className="question">What is the SUM of <span className="text-info">{this.state.riddle.field1}</span> + <span className="text-info">{this.state.riddle.field2}</span> ?</p>
					{this.renderOptions()}
				</div>

				<div className={classNames("after",{'hide': !this.state.gameover},{'wrong animated zoomInDown': !this.state.correct},{'correct animated zoomInDown': this.state.correct})}>
					{this.renderMessage()}
				</div>
			
	
				<div className="play-again">
					<a className="button" onClick={this.play}>Play Again</a>
				</div>
			</div>
		);
	}
}

export default Quiz;