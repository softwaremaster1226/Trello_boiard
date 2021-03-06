import React from "react";
import "./SignIn.css";
import {connect} from "react-redux";
import {loginUser} from "../../store/action/actions";
import {googleUser} from "../../store/action/actions";
import jwt from "jsonwebtoken";
import {SERVER_PORT} from "../../config"

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			btnval: "Login",
			errors: {}
		}
		
	}

	componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
    	
    	
    	const tokenUrl = localStorage.getItem("tokenUrl")
   //  	jwt.sign(
			// payload,
			// "secret",
			// (err,token)=>{
			// res.json({
			// 	success: true,
			// 	token: "Bearer " + token
			// 	});
			// });
    	
      this.props.history.push(`/${tokenUrl}/dashboard`);
    }
    // if (errors) {
    // 	this.setS
    // }
  }
    componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
    	
    	//const uname = nextProps.auth.user.username
    	const tokenUrl = localStorage.getItem("tokenUrl")
      this.props.history.push(`/${tokenUrl}/dashboard`);
    }
    if (nextProps.errors) {
    	this.setState({
    		btnval: "Login",
    		
    	})
    }

    
  }

	onChange = e=> {
		this.setState({
			[e.target.id]: e.target.value
		});
	}
	effectClick = e=>{
		//e.preventDefault();
		this.setState({
			btnval: <span className="spinner-border spinner-border-sm"></span>
		})
		//const btnval = () => <h1>www</h1>
		//e.target.value = btnval;
		//console.log(e.target.value)
	}
	googleClick = e=>{
		e.preventDefault();
		this.props.googleUser();
	}
	handleSubmit = e=> {
		e.preventDefault();
		const username = this.state.email;
		const password = this.state.password
		const userData={
			username,
			password
		}
		
		this.props.loginUser(userData);
	}
	
	render() {
			
		const {errors} = this.props;
		const lists = [
			"Tour",
			"Pricing",
			"Apps",
			"Jobs",
			"Blog",
			"Developers",
			"About",
			"Help",
			"Cookie Settings"
			];
		const list = lists.map((item,i) =>
  		<li key={i}><a href="#">{item}</a></li>
			);
		return (
			<div>
			<section id="signin">
				<img alt="Trello" className="trello-main-logo" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" />
				
				<div className="card">
					<div className="card-body">
						<h4 className="card-title">Lonin to Trello</h4>
						<p>{errors.unconfirmMsg}</p>
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
							  <input type="text" className="form-control" id="email" placeholder="Email" onChange={this.onChange}/>
							  <span className="text-danger">{errors.email}</span>
							  <span className="text-danger">{errors.emailnotfound}</span>
							  <span className="text-danger">{errors.messageEmail}</span>

							</div>
							<div className="form-group">
							  <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.onChange}/>
							  <span className="text-danger">{errors.password}</span>
							  <span className="text-danger">{errors.passwordincorrect}</span>
							  <span className="text-danger">{errors.messagePwd}</span>
							</div>
							
							<button type="submit" className="btn btn-success btn-block" value="Login" onClick={this.effectClick}>{this.state.btnval}</button>
							<p className="text-center">OR</p>
 							<a type="button" href={`${SERVER_PORT}/auth/google/sign`} className="btn btn-outline-dark btn-block">Continue With Google</a>

						</form>
						<hr />
						<p><a href="#">Can"t log in?</a>&nbsp;<a href="/signup">Sign up for an account</a></p>

					</div>

				</div>
				<p> <a href="#" className="card-link">Terms of Service</a>  <a href="#" className="card-link">Privacy Policy.</a> </p>

				<div className="footer align-items-center my-4">
			<div id="language-picker-container">
				<select name="language-picker"
				 		 id="language-picker"
				 		 data-analytics-event="clickedFooterLanguageSelectMenu"> 
				 		 <option value="choose-one" id="choose" disabled={true}>Select your language???</option>  
				 		 <option value="cs" data-url="https://trello.com/cs" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="??e??tina">??e??tina</option>  
				 		 <option value="de" data-url="https://trello.com/de" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Deutsch">Deutsch</option>  
				 		 <option value="en" data-url="https://trello.com/en" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English">English</option>  
				 		 <option value="en-AU" data-url="https://trello.com/en-AU" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (AU)">English (AU)</option>  
				 		 <option value="en-GB" data-url="https://trello.com/en-GB" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (UK)">English (UK)</option>  
				 		 <option value="en-US" data-url="https://trello.com/en-US" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (US)">English (US)</option>  
				 		 <option value="es" data-url="https://trello.com/es" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Espa??ol">Espa??ol</option>  
				 		 <option value="fr" data-url="https://trello.com/fr" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Fran??ais">Fran??ais</option>  
				 		 <option value="it" data-url="https://trello.com/it" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Italiano">Italiano</option>  
				 		 <option value="hu" data-url="https://trello.com/hu" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Magyar">Magyar</option>  
				 		 <option value="nl" data-url="https://trello.com/nl" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Nederlands">Nederlands</option>  
				 		 <option value="nb" data-url="https://trello.com/nb" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Norsk (bokm??l)">Norsk (bokm??l)</option>  
				 		 <option value="pl" data-url="https://trello.com/pl" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Polski">Polski</option>  
				 		 <option value="pt-BR" data-url="https://trello.com/pt-BR" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Portugu??s (Brasil)">Portugu??s (Brasil)</option>  
				 		 <option value="fi" data-url="https://trello.com/fi" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Suomi">Suomi</option>  
				 		 <option value="sv" data-url="https://trello.com/sv" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Svenska">Svenska</option>  
				 		 <option value="vi" data-url="https://trello.com/vi" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Ti???ng Vi???t">Ti???ng Vi???t</option>  
				 		 <option value="tr" data-url="https://trello.com/tr" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="T??rk??e">T??rk??e</option> 
				 		 <option value="ru" data-url="https://trello.com/ru" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="??????????????">??????????????</option>  
				 		 <option value="uk" data-url="https://trello.com/uk" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="????????????????????">????????????????????</option>  
				 		 <option value="th" data-url="https://trello.com/th" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="?????????????????????">?????????????????????</option>  
				 		 <option value="zh-Hans" data-url="https://trello.com/zh-Hans" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="?????? (??????)">?????? (??????)</option>  
				 		 <option value="zh-Hant" data-url="https://trello.com/zh-Hant" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="?????? (??????)">?????? (??????)</option>  
				 		 <option value="ja" data-url="https://trello.com/ja" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="?????????">?????????</option>  
				</select>
			</div>
			 	<div> <span className="dropdown-icon"></span> </div> 
			
			
			

			<p className="global-footer-detail"> 
			<img className="atlassian-logo-small white" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/e4e8fa01ba058bce8e9f2bb7459516f9/atlassian-logo-white-small.svg" width="150" alt="logo" /> 
			<img className="atlassian-logo-small gray" src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6cdbcb3dcf82bba860f1768d184161ee/atlassian-logo-gray-small.svg" width="150" alt="logo" />
			&nbsp;&copy; Copyright 2019. All rights reserved. </p>

		</div>
		 
			</section>
			<ul className="menulists_sign">
			 {list}
			</ul>
			</div>
			)
	}
}

const mapStateToProps = state=>({
	auth: state.auth,
	errors: state.errors
});
const mapDispatchToProps = dispatch=>{
	return {
		loginUser: (a)=>dispatch(loginUser(a)),
		googleUser: ()=>dispatch(googleUser())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

//<button type="button" className="btn btn-outline-dark btn-block" onClick={this.googleClick}>Continue With Google</button>
// 							<a type="button" href={`${SERVER_PORT}/auth/google/sign`} className="btn btn-outline-dark btn-block">Continue With Google</a>
