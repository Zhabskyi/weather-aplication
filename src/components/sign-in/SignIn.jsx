import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
	render() {
		return (<div className='sign-in'>
			<form>
				<div className='sign-in__container'>
					<label className='sign-in__container__label' htmlFor='email'>E-mail</label>
					<input className='sign-in__container__input' type="email" id='email'/>
				</div>
				<div className='sign-in__container'>
					<label className='sign-in__container__label' htmlFor='name'>Name</label>
					<input className='sign-in__container__input' type="text" id='name'/>
				</div>
				<div className='sign-in__container'>
					<label className='sign-in__container__label' htmlFor='password'>Password</label>
					<input className='sign-in__container__input' type="password" id='password'/>
				</div>
				<button type='Submit' class='sign-in__button'>SIGN UP</button>
			</form>
		</div>)
	}
}

export default SignIn;