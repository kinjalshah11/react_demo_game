import React, {Component} from "react";

class Quiz extends Component{
	render(){
		return(
			<div className="quiz">
				<div className="quiz-content">
					<p className="question">What is the SUM of <span className="text-info">5</span> + <span className="text-info">2 </span> ?</p>
					<div className="fields"></div>
				</div>
			</div>
		);
	}
}

export default Quiz;