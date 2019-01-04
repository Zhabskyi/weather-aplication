import React from 'react';

import AuthService from '../../../commons/scripts/authService/AuthService';
import Input from "../../input/Input";
import Button, { TYPES } from '../../button/Button';

//const url = 'https://rest-node-course-api.herokuapp.com/auth/login';

class LoginForm extends React.Component {
	constructor() {
		super();
		this.AuthService = new AuthService();
	}

  state = {
    email : '',
    password : ''
	};

	handleFormLogin = (e) => {
		e.preventDefault();
		this.AuthService.login(this.state);
		if (this.AuthService.loggedIn()) {
			this.AuthService.getPosts();
			console.log(this.props.history);
			console.log(this.AuthService.getPosts());
		}

	}
	
	chnageHandler = (field) => {
		return (e) => {
			const value = e.target.value;
			this.setState({[field]: value});
		}
	}

  render() {
    return <form onSubmit={this.handleFormLogin}>
		<Input
			title="E-mail"
			onChange={this.chnageHandler('email')} 
			value={this.state.email}
			valid={true}
			type="email" 
			id='email' 
		/>
		<Input
			title="Password"
			onChange={this.chnageHandler('password')} 
			value={this.state.password}
			valid={true}
			type="password" 
			id='password' 
		/>
		<Button title={'Log in'} type={ TYPES.default}/>
	</form>
  }
}

export default LoginForm;