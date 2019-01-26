import React from 'react';


//import AuthService from '../../../commons/scripts/authService/AuthService';
import Input from "../../input/Input";
import Button, { TYPES } from '../../UI/button/Button';
import Spinner from '../../UI/Spinner/Spinner';

//const url = 'https://rest-node-course-api.herokuapp.com/auth/login';

export default class LoginForm extends React.Component {
	constructor() {
		super();
		this.redirect = null;
		this.state = {
			email : '',
			password : '',
			loading: false
		}
	}

	handleFormLogin = async (e) => {
		e.preventDefault();
		this.setState({loading: true});
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
		let spinner = null;
		if (this.state.loading) {
			spinner = <Spinner />;
		}
    return ( 
			<React.Fragment>
				{spinner}
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
			</React.Fragment>
		);
		}
	}

