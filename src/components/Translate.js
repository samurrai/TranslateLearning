import React from "react"

class Translate extends React.Component{
	render(){
		return(
			<div id="translate">
				<h1>Категория: {this.props.category}</h1>
				<p>{this.props.first_word} - {this.props.first_translate}</p>
				<p>{this.props.second_word} - {this.props.second_translate}</p>
				<p>{this.props.third_word} - {this.props.third_translate}</p>
			</div>
		);
	}
}

export default Translate;