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
		if (this.lengthChecker("isEmail") 
				&& this.lengthChecker("isName") 
				&& this.lengthChecker("isPassword")) {
			this.props.onSignUp(this.state);
		}
	}
	

	chnageHandler = (field) => {
		return (e) => {
			const value = e.target.value;
			this.setState({[field]: value});
		}
	}

	lengthChecker = (field) => {
		return (e) => {
			if ( e.target.value.length < 5 ) {
				const value = true;
				this.setState((oldState) => Object.assign({}, oldState, {[field]: value}, {errors: [ `${field} too short`]}));
				e.target.setCustomValidity('Have to be longer than 5 symbols');
			} else {
				const value = false;
				this.setState({[field]: value});
				e.target.setCustomValidity('');
			}
			return this.state.field;
			}
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
					onBlur={this.lengthChecker('isEmail')}
					value={this.state.email} 
					type="email" 
					id='email'/>
      </div>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='name'>Name</label>
				<input className={inputNameClass} 
					onChange={this.chnageHandler('name')}
					onBlur={this.lengthChecker('isName')}
					value={this.state.name} 
					type="text" 
					id='name'/>
      </div>
      <div className='sign-in__container'>
        <label className='sign-in__container__label' htmlFor='password'>Password</label>
				<input className={inputPasswordClass}
					onChange={this.chnageHandler('password')}
					onBlur={this.lengthChecker('isPassword')}
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