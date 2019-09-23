import React from "react"

class FirstTranslate extends React.Component{

	show(){		
		document.getElementById('first-question').style.display = "block";
		document.getElementById("first-btn").style.display = "none";
		document.getElementById("first-translate").style.display = "none";
	}
	render(){
		return(
			<div id="first-translate">
				<h1>Категория: {this.props.category}</h1>
				<p>{this.props.first_word} - {this.props.first_translate}</p>
				<p>{this.props.second_word} - {this.props.second_translate}</p>
				<p>{this.props.third_word} - {this.props.third_translate}</p>
				<input id="first-btn" type="button" value="Пройти тест" onClick={this.show}/>
			</div>
		);
	}
}

export default FirstTranslate;