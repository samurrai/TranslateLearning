import React from "react"

class ThirdTranslate extends React.Component{

	show(){		
		document.getElementById('third-question').style.display = "block";
		document.getElementById("third-btn").style.display = "none";
		document.getElementById("third-translate").style.display = "none";
	}
	render(){
		return(
			<div id="third-translate">
				<h1>Категория: {this.props.category}</h1>
				<p>{this.props.first_word} - {this.props.first_translate}</p>
				<p>{this.props.second_word} - {this.props.second_translate}</p>
				<p>{this.props.third_word} - {this.props.third_translate}</p>
				<input id="third-btn" type="button" value="Пройти тест" onClick={this.show}/>
			</div>
		);
	}
}

export default ThirdTranslate;