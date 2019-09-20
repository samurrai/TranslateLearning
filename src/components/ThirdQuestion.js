import React from "react"

class ThirdQuestion extends React.Component{

	correct_first(){
		alert("Правильно!");
		document.getElementById("count").innerText = 1 + Number.parseInt(document.getElementById("count").innerText);
		document.getElementById("third-first").style.display = "none";
		if(document.getElementById("count").innerText == "9"){
			alert("Вы прошли все тесты!");
		}
	}
	correct_second(){
		alert("Правильно!");
		document.getElementById("count").innerText = 1 + Number.parseInt(document.getElementById("count").innerText);
		document.getElementById("third-second").style.display = "none";
		if(document.getElementById("count").innerText == "9"){
			alert("Вы прошли все тесты!");
		}
	}
	correct_third(){
		alert("Правильно!");
		document.getElementById("count").innerText = 1 + Number.parseInt(document.getElementById("count").innerText);
		document.getElementById("third-third").style.display = "none";
		if(document.getElementById("count").innerText == "9"){
			alert("Вы прошли все тесты!");
		}
		}

	inCorrect(){
		alert("Неправильно!");
	}

	render(){
		return(
			<div id="third-question">
				<p id="third-first">{this.props.first_word} - <input value="ковер" onClick={this.inCorrect} type="button"/><input value="бейсбол" onClick={this.correct_first} type="button"/><input value="кружка" onClick={this.inCorrect} type="button"/></p>
				<p id="third-second">{this.props.second_word} - <input value="клавиатура" onClick={this.inCorrect} type="button"/><input value="носки" onClick={this.inCorrect} type="button"/><input value="триатлон" onClick={this.correct_second} type="button"/></p>
				<p id="third-third">{this.props.third_word} - <input value="футбол" onClick={this.correct_third} type="button"/><input value="борьба" onClick={this.inCorrect} type="button"/><input value="краска" onClick={this.inCorrect} type="button"/></p>
			</div>
		);
	}
}

export default ThirdQuestion;