import React from 'react';
import './Login.css';

class Login extends React.Component {
	render() {
		return (<div className='login login-hidden'>
			<form>
				<div className='login__container'>
					<label className='login__container__label' htmlFor='email'>E-mail</label>
					<input className='login__container__input' type="email" id='email'/>
				</div>
				<div className='login__container'>
					<label className='login__container__label' htmlFor='password'>Password</label>
					<input className='login__container__input' type="password" id='password'/>
				</div>
				<button type='Submit' class='login__button'>LOGIN</button>
			</form>
		</div>)
	}
}

export default Login;