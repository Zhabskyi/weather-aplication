import React from 'react';

class SignUpForm extends React.Component {
  state = {
    email: '',
    name: '',
    password: ''
	};


	handleFormSignIn = (e) => {
		e.preventDefault();
		this.props.onSignUp(this.state);
	}
	

	chnageHandler = (field) => {
		return (e) => {
			const value = e.target.value;
			this.setState({[field]: value});
		}
	}

	renderErrors =() => {
		if(this.props.errors.length > 0) {
			return this.props.errors.map(e => {
				console.log(e);
				debugger;
				return <div>{e.msg}</div>
			})
		}
		return null;
	};

  render() {
		console.log(this.props.errors);
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
		 {this.renderErrors()}
    </form>
  }
}

export default SignUpForm;