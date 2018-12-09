import React from 'react';

const url = 'https://rest-node-course-api.herokuapp.com/auth/login';

class LoginForm extends React.Component {
  state = {
    email : '',
    password : ''
	};
	
	LogIn  = (e) => {
		e.preventDefault();
		fetch(url, {
			method: 'POST',// POST for login -> token 'asdasdasdasdasd23423423' -> save to local storage localStorage.set()
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state),
		})
		.then(resp => resp.json())
		.then(resp => { 
			console.log(resp);
			this.setToken(resp.token);
		})
		.catch(e => {
			console.log(e);
		});
	}

	setToken(token) {
		localStorage.setItem('token', token)
}

	chnageHandler = (field) => {
		return (e) => {
			const value = e.target.value;
			this.setState({[field]: value});
		}
	}

  render() {
    return <form onSubmit={this.LogIn}>
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