import React from 'react';

class SignUpForm extends React.Component {
	constructor() {
		super();
		this.inputClass = 'sign-in__container__input';
	}
  state = {
    email: '',
    name: '',
		password: '',
		errors: [],
		// isEmail: false,
		// isName: false,
		// isPassword: false,
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

	lengthChecker = (e) => {
		const value = e.target.value;
		console.log(e.target);
		if ( value.length < 5 ) {
			e.target.className = this.inputClass += ' input-error';
		//	this.inputClass += ' input-error';
			this.setState({errors: ['Field too short']})
			e.target.setCustomValidity('Have to be longer than 5 symbols');
			e.stopPropagation();
			console.log(e.target);
    } else {
			debugger;
		}
		return null;
	}

	renderErrors =() => {
		if(this.props.errors.length > 0) {
			return this.props.errors.map(e => {
				console.log(e);
			//	debugger;
				return <div>{e.msg}</div>
			})
		}
		return null;
	};

  render() {
		//console.log(this.props.errors);
		//console.log(this.props.inputClass);
    return <form onSubmit={this.handleFormSignIn}>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='email'>E-mail</label>
				<input className='sign-in__container__input'
					onChange={this.chnageHandler('email')} 
					onBlur={this.lengthChecker}
					value={this.state.email} 
					type="email" 
					id='email'/>
      </div>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='name'>Name</label>
				<input className='sign-in__container__input' 
					onChange={this.chnageHandler('name')}
					onBlur={this.lengthChecker}
					value={this.state.name} 
					type="text" 
					id='name'/>
      </div>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='password'>Password</label>
				<input className='sign-in__container__input'
					onChange={this.chnageHandler('password')}
					onBlur={this.lengthChecker}
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