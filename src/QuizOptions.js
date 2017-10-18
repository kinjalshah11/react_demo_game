import React, {Component} from "react";

class QuizOptions extends Component{

	constructor(props){
		super(props);

		this.state = {};
		this.callParentCheckOption = this.callParentCheckOption.bind(this);
	}

	callParentCheckOption(){
		this.props.checkResults(this.props.option);
	}

	render(){
		return(
			<div className="fields animated zoomIn" onClick={this.callParentCheckOption}>
				<div className="field-block">{this.props.option}</div>
			</div>
		);
	}
}

export default QuizOptions;