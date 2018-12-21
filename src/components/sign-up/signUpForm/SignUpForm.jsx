import React from 'react';

class SignUpForm extends React.Component {
  state = {
    email: '',
    name: '',
		password: '',
		isEmail: false,
		isName: false,
		isPassword: false,
	};


	handleFormSignIn = (e) => {
		e.preventDefault();
		if (this.emailLengthChecker && this.nameLengthChecker && this.passwordLengthChecker) {
			this.props.onSignUp(this.state);
		}
	}
	

	chnageHandler = (field) => {
		return (e) => {
			const value = e.target.value;
			this.setState({[field]: value});
		}
	}

	emailLengthChecker = (e) => {
		const value = e.target.value;
		console.log(e.target);
		if ( value.length < 5 ) {
			const isEmail = true;
    	this.setState(state => Object.assign({}, state, {isEmail}));
			//this.setState({errors: ['Field too short']})
			e.target.setCustomValidity('Have to be longer than 5 symbols');
			console.log(e.target);
    } else {
			const isEmail = false;
			this.setState(state => Object.assign({}, state, {isEmail}));
			e.target.setCustomValidity('');
		}
		return this.state.isEmail;
	}

	nameLengthChecker = (e) => {
		if ( e.target.value.length < 5 ) {
			const isName = true;
    	this.setState(state => Object.assign({}, state, {isName}));
			//this.setState({errors: ['Field too short']})
			e.target.setCustomValidity('Have to be longer than 5 symbols');
			console.log(e.target);
    } else {
			const isName = false;
			this.setState(state => Object.assign({}, state, {isName}));
			e.target.setCustomValidity('');
		}
		return this.state.isName;
	}

	passwordLengthChecker = (e) => {
		if ( e.target.value.length < 5 ) {
			const isPassword = true;
    	this.setState(state => Object.assign({}, state, {isPassword}));
			//this.setState({errors: ['Field too short']})
			e.target.setCustomValidity('Have to be longer than 5 symbols');
			console.log(e.target);
    } else {
			const isPassword = false;
			this.setState(state => Object.assign({}, state, {isPassword}));
			e.target.setCustomValidity('');
		}
		return this.state.isPassword;
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
		let inputEmailClass = 'sign-in__container__input';
		let inputNameClass = 'sign-in__container__input';
		let inputPasswordClass = 'sign-in__container__input';

    if (this.state.isEmail) {
      inputEmailClass += ' input-error';
		}

		if (this.state.isName) {
      inputNameClass += ' input-error';
		}

		if (this.state.isPassword) {
      inputPasswordClass += ' input-error';
		}

		//console.log(this.props.errors);
		//console.log(this.props.inputClass);
    return <form onSubmit={this.handleFormSignIn}>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='email'>E-mail</label>
				<input className={inputEmailClass}
					onChange={this.chnageHandler('email')} 
					onBlur={this.emailLengthChecker}
					value={this.state.email} 
					type="email" 
					id='email'/>
      </div>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='name'>Name</label>
				<input className={inputNameClass} 
					onChange={this.chnageHandler('name')}
					onBlur={this.nameLengthChecker}
					value={this.state.name} 
					type="text" 
					id='name'/>
      </div>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='password'>Password</label>
				<input className={inputPasswordClass}
					onChange={this.chnageHandler('password')}
					onBlur={this.passwordLengthChecker}
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