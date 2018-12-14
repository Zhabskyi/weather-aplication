import React from 'react';
import AuthService from '../authService/AuthService';

//const url = 'https://rest-node-course-api.herokuapp.com/auth/signup';

class SignUpForm extends React.Component {
	constructor() {
		super();
		this.AuthService = new AuthService();
	}

  state = {
    email: '',
    name: '',
    password: ''
	};


	handleFormSignIn = (e) => {
		e.preventDefault();
		this.AuthService.signIn(this.state);
	}
	

	chnageHandler = (field) => {
		return (e) => {
			const value = e.target.value;
			this.setState({[field]: value});
		}
	}

  render() {
    return <form onSubmit={this.handleFormSignIn}>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='email'>E-mail</label>
				<input className='sign-in__container__input' 
					onChange={this.chnageHandler('email')} 
					value={this.state.email} 
					type="email" 
					id='email'/>
      </div>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='name'>Name</label>
				<input className='sign-in__container__input' 
					onChange={this.chnageHandler('name')} 
					value={this.state.name} 
					type="text" 
					id='name'/>
      </div>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='password'>Password</label>
				<input className='sign-in__container__input'
					onChange={this.chnageHandler('password')}
					value={this.state.password} 
					type="password" 
					id='password'/>
      </div>
      <button type='Submit' className='sign-in__button'>SIGN UP</button>
    </form>
  }
}

export default SignUpForm;