import React from "react"

class SecondQuestion extends React.Component{

	correct_first(){
		alert("Правильно!");
		document.getElementById("count").innerText = 1 + Number.parseInt(document.getElementById("count").innerText);
		document.getElementById("second-first").style.display = "none";
		if(document.getElementById("count").innerText == "6"){
			document.getElementById("third-translate").style.display = "block";
		}
	}
	correct_second(){
		alert("Правильно!");
		document.getElementById("count").innerText = 1 + Number.parseInt(document.getElementById("count").innerText);
		document.getElementById("second-second").style.display = "none";
		if(document.getElementById("count").innerText == "6"){
			document.getElementById("third-translate").style.display = "block";
		}
	}
	correct_third(){
		alert("Правильно!");
		document.getElementById("count").innerText = 1 + Number.parseInt(document.getElementById("count").innerText);
		document.getElementById("second-third").style.display = "none";
		if(document.getElementById("count").innerText == "6"){
			document.getElementById("third-translate").style.display = "block";
		}
	}

	inCorrect(){
		alert("Неправильно!");
	}

	render(){
		return(
			<div id="second-question">
				<p id="second-first">{this.props.first_word} - <input value="рюкзак" onClick={this.inCorrect} type="button"/><input value="мясо" onClick={this.correct_first} type="button"/><input value="обувь" onClick={this.inCorrect} type="button"/></p>
				<p id="second-second">{this.props.second_word} - <input value="телефон" onClick={this.inCorrect} type="button"/><input value="часы" onClick={this.inCorrect} type="button"/><input value="яблоко" onClick={this.correct_second} type="button"/></p>
				<p id="second-third">{this.props.third_word} - <input value="сок" onClick={this.correct_third} type="button"/><input value="нож" onClick={this.inCorrect} type="button"/><input value="молоко" onClick={this.inCorrect} type="button"/></p>
			</div>
		);
	}
}

export default SecondQuestion;