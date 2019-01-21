import React from 'react';
import './Login.css';
import LoginForm from './loginForm/LoginForm';

const Login = props => (
	<div className='login login-hidden'>
		<LoginForm  authService={props.authService} onSuccess={() => props.history.push('/posts')}/>
	</div>
);

export default Login;