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
			debugger;
			this.setState({errors: [...e.payload]})
		})
	};

	render() {
		return (
			<div className="sign-in">
				<SignUpForm onSignUp={this.onSignUp} errors={this.state.errors}/>
			</div>
		);
	}
}

export default SignUp;
