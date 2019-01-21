import React from 'react';
import './Login.css';
import LoginForm from './loginForm/LoginForm';

const Login = (props) => {
	return (<div className='login login-hidden'>
		<LoginForm  authService={props.authService}/>
	</div>)
}

export default Login;