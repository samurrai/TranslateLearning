import React from "react"

class SecondTranslate extends React.Component{

	show(){		
		document.getElementById('second-question').style.display = "block";
		document.getElementById("second-btn").style.display = "none";
		document.getElementById("second-translate").style.display = "none";
	}
	render(){
		return(
			<div id="second-translate">
				<h1>Категория: {this.props.category}</h1>
				<p>{this.props.first_word} - {this.props.first_translate}</p>
				<p>{this.props.second_word} - {this.props.second_translate}</p>
				<p>{this.props.third_word} - {this.props.third_translate}</p>
				<input id="second-btn" type="button" value="Пройти тест" onClick={this.show}/>
			</div>
		);
	}
}

export default SecondTranslate;