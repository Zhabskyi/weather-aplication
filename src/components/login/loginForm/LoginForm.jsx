import React from 'react';
import AuthService from '../../../commons/scripts/authService/AuthService';

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
		<div className='login__container'>
			<label className='login__container__label' htmlFor='email'>E-mail</label>
			<input className='login__container__input'
				onChange={this.chnageHandler('email')} 
				value={this.state.email}
				type="email" 
				id='email'/>
		</div>
		<div className='login__container'>
			<label className='login__container__label' htmlFor='password'>Password</label>
			<input className='login__container__input'
				onChange={this.chnageHandler('password')}
				value={this.state.password} 
				type="password" 
				id='password'/>
		</div>
		<button type='Submit' className='login__button'>LOGIN</button>
	</form>
  }
}

export default LoginForm;