import React from "react"
import Translate from "./components/Translate"
import FirstQuestion from "./components/FirstQuestion"
import SecondQuestion from "./components/SecondQuestion"
import ThirdQuestion from "./components/ThirdQuestion"

class App extends React.Component{
	render(){
		return(
			<div>
				<div id="points">Баллы: <span id="count">0</span></div>
				<Translate category="Home animals" 
				first_word="cat" first_translate="кот" 
				second_word="dog" second_translate="собака" 
				third_word="mouse" third_translate="мышь"/>

				<FirstQuestion first_word="cat"
				second_word="dog"
				third_word="mouse"/>

				<Translate category="Food" 
				first_word="meat" first_translate="мясо" 
				second_word="apple" second_translate="яблоко" 
				third_word="juice" third_translate="сок"/>
				
				<SecondQuestion first_word="meat"
				second_word="apple"
				third_word="juice"/>

				<Translate category="Sport" 
				first_word="baseball" first_translate="бейсбол" 
				second_word="triathlon" second_translate="триатлон" 
				third_word="soccer" third_translate="футбол"/>
				
				<ThirdQuestion first_word="baseball"
				second_word="triathlon"
				third_word="soccer"/>
			</div>
		);
	}
}

export default App;