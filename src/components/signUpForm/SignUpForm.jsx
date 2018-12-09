import React from 'react';

const url = 'https://rest-node-course-api.herokuapp.com/auth/signup';

class SignUpForm extends React.Component {
  state = {
    email: '',
    name: '',
    password: ''
	};
	
	signUp  = (e) => {
		e.preventDefault();
		console.log(e);
		fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state),
		}).then((resp) => {
			console.log(resp)
		}).catch(e => {
			console.log(e);
		});
	}

	chnageHandler = (field) => {
		return (e) => {
			const value = e.target.value;
			this.setState({[field]: value});
		}
	}

  render() {
    return <form onSubmit={this.signUp}>
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