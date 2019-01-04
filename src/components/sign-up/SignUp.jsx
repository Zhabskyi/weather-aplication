import React from "react";
import "./SignUp.css";
import SignUpForm from "./signUpForm/SignUpForm";

class SignUp extends React.Component {
	state = {
		errors: [],
	};



	onSignUp = userData => {
		this.props.authService
		.signIn(userData)
		.then((resp) => {
			debugger;
		 	alert('GOOD!');
		})
		.catch((e) => {
		//	debugger;
			console.log(e);
			//this.setState({errors: [...e.payload]})
		})
	};

	render() {
		return (
			<div className="sign-in">
				<SignUpForm 
					onSignUp={this.onSignUp} 
					errors={this.state.errors}
					inputClass={this.inputClass}
					/>
			</div>
		);
	}
}

export default SignUp;
