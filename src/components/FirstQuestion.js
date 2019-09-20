import React from "react"

class FirstQuestion extends React.Component{

	correct_first(){
		alert("Правильно!");
		document.getElementById("count").innerText = 1 + Number.parseInt(document.getElementById("count").innerText);
		document.getElementById("first-first").style.display = "none";
		if(document.getElementById("count").innerText == "3"){
			document.getElementById("second-translate").style.display = "block";
		}
	}
	correct_second(){
		alert("Правильно!");
		document.getElementById("count").innerText = 1 + Number.parseInt(document.getElementById("count").innerText);
		document.getElementById("first-second").style.display = "none";
		if(document.getElementById("count").innerText == "3"){
			document.getElementById("second-translate").style.display = "block";
		}
	}
	correct_third(){
		alert("Правильно!");
		document.getElementById("count").innerText = 1 + Number.parseInt(document.getElementById("count").innerText);
		document.getElementById("first-third").style.display = "none";
		if(document.getElementById("count").innerText == "3"){
			document.getElementById("second-translate").style.display = "block";
		}
	}

	inCorrect(){
		alert("Неправильно!");
	}

	render(){
		return(
			<div id="first-question">
				<p id="first-first">{this.props.first_word} - <input value="рыба" onClick={this.inCorrect} type="button"/><input value="кот" onClick={this.correct_first} type="button"/><input value="холодильник" onClick={this.inCorrect} type="button"/></p>
				<p id="first-second">{this.props.second_word} - <input value="бочка" onClick={this.inCorrect} type="button"/><input value="ручка" onClick={this.inCorrect} type="button"/><input value="собака" onClick={this.correct_second} type="button"/></p>
				<p id="first-third">{this.props.third_word} - <input value="мышь" onClick={this.correct_third} type="button"/><input value="кот" onClick={this.inCorrect} type="button"/><input value="молоко" onClick={this.inCorrect} type="button"/></p>
			</div>
		);
	}
}

export default FirstQuestion;