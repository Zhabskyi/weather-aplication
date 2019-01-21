import React from 'react';


//import AuthService from '../../../commons/scripts/authService/AuthService';
import Input from "../../input/Input";
import Button, { TYPES } from '../../button/Button';

//const url = 'https://rest-node-course-api.herokuapp.com/auth/login';

export default class LoginForm extends React.Component {
	constructor() {
		super();
		this.redirect = null;
		this.state = {
			email : '',
			password : ''
		}
	}

	handleFormLogin = async (e) => {
		e.preventDefault();
		try {
			await this.props.authService.login(this.state);
			this.props.onSuccess();
		} catch (e) {
			console.log(e);
		}
	}
	
	chnageHandler = (field) => {
		return (e) => {
			const value = e.target.value;
			this.setState({[field]: value});
		}
	}

  render() {
    return ( <div>
			<form onSubmit={this.handleFormLogin}>
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
			</div>
		);
		}
	}

