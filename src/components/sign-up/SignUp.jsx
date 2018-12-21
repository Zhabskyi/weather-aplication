import React from "react";
import "./SignUp.css";
import SignUpForm from "./signUpForm/SignUpForm";

class SignUp extends React.Component {
	state = {
		errors: [],
	};

	// emailLengthChecker = (e) => {
	// 	const value = e.target.value;
	// 	console.log(value.length);
	// 	if ( value.length < 5 ) {
	// 		this.inputClass += ' input-error';
	// 		this.setState({errors: ['Field too short']})
	// 		e.target.setCustomValidity('Have to be longer than 5 symbols');
	// 		e.stopPropagation();
	// 		//console.log(e.target);
  //   } else {
	// 		debugger;
	// 	}
	// 	return null;
	// }

	// nameLengthChecker = (e) => {
	// 	const value = e.target.value;
	// 	if ( value.length < 5 ) {
	// 		this.inputClass += ' input-error';
	// 		this.setState({errors: ['Field too short']})
	// 		e.target.setCustomValidity('Have to be longer than 5 symbols');
	// 		console.log(e.target);
  //   } else {
	// 		debugger;
	// 	}
	// 	return null;
	// }

	// passwordLengthChecker = (e) => {
	// 	const value = e.target.value;
	// 	if ( value.length < 5 ) {
	// 		this.inputClass += ' input-error';
	// 		this.setState({errors: ['Field too short']})
	// 		e.target.setCustomValidity('Have to be longer than 5 symbols');
	// 		console.log(e.target);
  //   } else {
	// 		debugger;
	// 	}
	// 	return null;
	// }



	onSignUp = userData => {
		this.props.authService
		.signIn(userData)
		.then((resp) => {
			debugger;
		 	alert('GOOD!');
		})
		.catch((e) => {
		//	debugger;
			this.setState({errors: [...e.payload]})
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
