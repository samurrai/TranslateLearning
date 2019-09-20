import React from "react"
import FirstTranslate from "./components/FirstTranslate"
import SecondTranslate from "./components/SecondTranslate"
import ThirdTranslate from "./components/ThirdTranslate"
import FirstQuestion from "./components/FirstQuestion"
import SecondQuestion from "./components/SecondQuestion"
import ThirdQuestion from "./components/ThirdQuestion"

class App extends React.Component{
	render(){
		return(
			<div>
				<div id="points">Баллы: <span id="count">0</span></div>
				<FirstTranslate category="Home animals" 
				first_word="cat" first_translate="кот" 
				second_word="dog" second_translate="собака" 
				third_word="mouse" third_translate="мышь" divId="first-question"/>

				<FirstQuestion first_word="cat"
				second_word="dog"
				third_word="mouse"/>

				<SecondTranslate category="Food" 
				first_word="meat" first_translate="мясо" 
				second_word="apple" second_translate="яблоко" 
				third_word="juice" third_translate="сок" divId="second-question"/>
				
				<SecondQuestion first_word="meat"
				second_word="apple"
				third_word="juice"/>

				<ThirdTranslate category="Sport" 
				first_word="baseball" first_translate="бейсбол" 
				second_word="triathlon" second_translate="триатлон" 
				third_word="soccer" third_translate="футбол" divId="third-question"/>
				
				<ThirdQuestion first_word="baseball"
				second_word="triathlon"
				third_word="soccer"/>
			</div>
		);
	}
}

export default App;